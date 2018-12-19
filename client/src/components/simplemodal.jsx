import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as baseService from '../services/base';

import pink from '@material-ui/core/colors/pink';
import lightblue from '@material-ui/core/colors/lightblue';

// const url = "https://bibles.org/v2/chapters/eng-CEV:1Cor.2/verses.js?start=5&end=7";
// const url = "https://bibles.org/v2/verses/eng-GNTD:Acts.8.34.js";
// const url = "https://bibles.org/v2/passages.js?q[]=john+3:1-5&version=eng-CEV"
const proxyurl = "https://serene-crag-81882.herokuapp.com/"
const BIBLE_API_KEY = process.env.BIBLE_API_KEY

var parser = new DOMParser();

var versecontent = [];
var versetext = "";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        margin: 5
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    }
});

const colortheme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: lightblue,
    }
});

class SimpleModal extends React.Component {
    state = {
        open: false,
        reference: "",
        abbr: "",
        start: "",
        end: "",
        content: []
    };

    // onClick of emotion button, 3 steps occur:
    handleOpen = () => {

        // 1. call express api, returns a random reference from specified emotion document
        baseService.get(`/api/passages/${this.props.document}`)
            .then(data => {
                this.setState({
                    reference: data.reference,
                    abbr: data.abbr,
                    start: data.start,
                    end: data.end
                })
            })

            // 2. call Bible api with reference, returns verse content
            .then(() => {
                const url = `https://bibles.org/v2/chapters/eng-NASB:${this.state.abbr}/verses.js?start=${this.state.start}&end=${this.state.end}`
                fetch(proxyurl + url, {
                    headers: new Headers({ 'Authorization': 'Basic ' + window.btoa(`${BIBLE_API_KEY}: x`) }),
                    redirect: "follow",
                })
                    .then(res => res.json())
                    .then(contents => {
                        let versearray = contents.response.verses
                        versearray.forEach(verse => {
                            var regex = /(<([^>]+)>)|[0-9]/ig;
                            let versetext = verse.text.replace(regex, "");
                            let alltext = this.state.content.concat(' ', versetext)
                            this.setState({
                                content: alltext,

                                // 3. open modal displaying reference and verse content
                                open: true
                            })
                        })
                    })
                    .catch((e) => console.log(`Error: ${e}`))
            })
            .catch(err => {
                alert("Your Verse Failed to Load");
                console.log(err)
            })
    };

    handleClose = () => {
        this.setState({ open: false, content: [] });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <MuiThemeProvider theme={colortheme}>
                    <Button style={getModalStyle()} variant="contained" color={this.props.color} onClick={this.handleOpen}>{this.props.label}</Button>
                </MuiThemeProvider>
                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">{this.state.reference}</Typography>
                        {/* <Typography variant="subtitle1" id="simple-modal-description"><div dangerouslySetInnerHTML={{ __html: this.state.content }} /></Typography> */}
                        <Typography variant="subtitle1" id="simple-modal-description">{this.state.content}</Typography>

                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// intermediary variable for handling recursive nesting
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;









// let joined = versecontent.join(" ")
// this.setState({
//     content: joined
// })









// REGEX METHOD
// .then(res => res.json())                                                // convert api json response to js
//     .then(contents => {
//         let versearray = contents.response.verses                           // extract array of verses objects

//         versearray.forEach(verse => {                                       // loop through array
//             let versetext = verse.text                                      // extract text value for each verse object (includes other unwanted items)
//             console.log(versetext)

//             let pattern = /<\/sup\b[^>]*>(.*?)<\/p>/
//             let words = pattern.exec(versetext)[1]
//             this.setState({
//                 content: [...this.state.content, words]
//             })
//             console.log(this.state.content)
//         })
//     })
//     .catch((e) => console.log(`Can’t access Bible API url. Error: ${e}`))

{/* <Typography variant="subtitle1" id="simple-modal-description">{this.state.content}</Typography> */ }