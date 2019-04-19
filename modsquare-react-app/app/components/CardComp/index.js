import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CardActionArea } from '@material-ui/core';
import YouTube from 'react-youtube';
import nl2br from 'react-nl2br';

const styles = theme => ({
  card: {
    maxWidth: '100%',
    maxheight: 50,
    margin: '20px 0',
  },

  content: {
    height: '400px'
  },

  media: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  actions: {
    display: 'flex',
  },
  uploadedBy: {
    fontSize: 18,
  },
  submittedOn: {
    fontSize: 12,
  },
  submissionStatus: {
    fontSize: 14,
  },
  avatar: {
    backgroundColor: red[500],
  },
  status_rejected: {},
  header: {
    color: red[500],
    height: '50px',
  },
});

class Cards extends React.Component {
  state = { expanded: false };

  approveCheck = () => 'primary';

  // this.props.status == "approve" ? "primary" : "secondary"

  formatText = text => nl2br(text);

  render() {
    const { classes } = this.props;
    const { video, iframe } = this.props;
    let video_id;
    if (video) {
      video_id = video.split('=', -1);
    }
    const opts = {
      height: '360px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <Card className={classes.card}>
        <CardHeader
          style={{ backgroundColor: '#F0F0F0', height: '50px' }}
          action={
            <Typography
              component="span"
              style={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                background: `${
                  this.props.status == 'accepted'
                    ? '#4E8E08'
                    : this.props.status == 'rejected'
                      ? '#AE3619'
                      : '#3E51B5'
                }`,
                borderRadius: '8px',
                marginRight: '10px',
                padding: '6px',
                color: 'white',
              }}
            >
              {this.props.status}
            </Typography>
          }
          title={this.props.user}
          classes={{
            title: classes.uploadedBy,
            subheader: classes.submittedOn,
            action: classes.submissionStatus,
          }}
          subheader={this.props.Date}
        />
        <CardContent className={classes.content}>
        {this.props.itemType === "image" && (
          <CardMedia
            className={classes.media}
            image={this.props.image}
            title={this.props.user}
          />
        )}
          {this.props.itemType === "video" && video && (
            <YouTube opts={opts} videoId={video_id[1]} onReady={this.onReady} />
          )}
          {iframe && (
            <iframe
              src={this.props.iframe}
              style={{
                width: '100%',
                height: '360px',
              }}
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
          )}
          {this.props.itemType === "content" && (
          <Typography component="p">
            {this.formatText(this.props.data)}
            <br />
          </Typography>
        )}
        </CardContent>
      </Card>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
  iframe: PropTypes.string,
  image: PropTypes.string,
  user: PropTypes.string,
  Date: PropTypes.string,
  data: PropTypes.string,
  itemType: PropTypes.string,
};

export default withStyles(styles)(Cards);
