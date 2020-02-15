import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as baseService from '../services/base';
import Thumbs from './thumbs'

// const proxyurl = "https://serene-crag-81882.herokuapp.com/"
const proxyurl = "https://cors-anywhere.herokuapp.com/"
const BIBLE_API_KEY = process.env.BIBLE_API_KEY

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        maxWidth: '45vh',
        maxHeight: '60vh'
    },

    margin: {
        margin: 5
    }
});

class SimpleModal extends React.Component {
    state = {
        open: false,
        reference: "",
        abbr: "",
        start: "",
        end: "",
        content: [],
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
            .catch(err => {
                alert("Verse failed to load")
                console.log(err)
            })

            // 2. call Bible api with reference, returns verse content
            .then(() => {
                const url = `https://bibles.org/v2/chapters/eng-NASB:${this.state.abbr}/verses.js?start=${this.state.start}&end=${this.state.end}`
                fetch(proxyurl + url, {
                    headers: new Headers({ 'Authorization': 'Basic ' + window.btoa(`${BIBLE_API_KEY}: x`) }),
                    redirect: "follow",
                })
                    .then(res => {
                        res.json()})
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
        const { classes, document, color, label, theme } = this.props;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Button className={classes.margin} variant="contained" color={color} onClick={this.handleOpen}>{label}</Button>
                </MuiThemeProvider>
                <Modal open={this.state.open} onClose={this.handleClose} style={{alignItems:'center',justifyContent:'center', display:'flex'}}>
                    <div  className={classes.paper}>
                        <Typography variant="h6" id="modal-title">{this.state.reference}</Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">{this.state.content}</Typography>
                        <Thumbs reference={this.state.reference} document={document} handleClose={this.handleClose} handleOpen={this.handleOpen} />
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