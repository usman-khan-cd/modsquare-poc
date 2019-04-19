import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography/Typography';
import Iframe from 'react-iframe';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import nl2br from 'react-nl2br';

const styles = theme => ({
  card: {
    margin: '20px 0',
    maxWidth: '100%',
    maxHeight: '400',
    boxShadow: '.15s box-shadow',
  },
  cardContent: {
    height: '400px',
    backgroundColor: '#eeeeee',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardAction: {
    borderTop: '1px solid #E8E8E8',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

  accept: {
    backgroundImage: 'linear-gradient(120deg, #76b852 0%, #96e6a1 100%)',
    backgroundColor: '#aae580',
    transition: 'background 0.2s ease',
    textSize: 10,
  },

  reject: {
    backgroundImage: 'linear-gradient(120deg, #e35d5b 0%, #ffb299 100%)',
    backgroundColor: '#f24d4d',
    transition: 'background 0.2s ease',
    textSize: 10,
  },

  pending: {
    backgroundColor: '#d8cdcd',
    textSize: 10,
    backgroundImage: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
  },

  topcontent: {
    fontFamily: 'inherit',
    color: '#3f51b5',
    paddingTop: '5px',
    fontSize: '12px',
    fontFamily: 'Roboto Helvetica',
    fontWeight: '300',
    lineHeight: '1.75',
    textTransform: 'uppercase',
  },
  status: {
    color: '#262121',
    fontSize: '20px',
  },
  Margin: {
    marginLeft: '20px',
  },
  ifram: {
    padding: 0,
    height: 300,
    maxWidth: 350,
    paddingTop: '0',
    paddingLeft: '20px',
    overflowY: 'scroll',
  },
  actions: {
    display: 'flex',
  },

  Button: {
    float: 'right',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
  },
  DivStyle: {
    maxWidth: 500,
    float: 'left',
    marginLeft: '20px',
    margintop: '10px',
  },
});

class FeedCard extends React.Component {
  formatText = text => nl2br(text);

  render() {
    const { iframe, classes } = this.props;
    const stylecard = null;
    const accepted_content = null;
    const { video } = this.props;
    console.log('this is in card', video, iframe);
    if (video) {
      var video_id = video.split('=', -1);
      console.log(video_id[1]);
    }

    if (iframe) {
      var get_url = iframe.split('"');
      console.log(get_url[1]);
    }

    if (this.props.status === 'accepted') {
      this.stylecard = classes.accept;
    } else if (this.props.status === 'rejected') {
      this.stylecard = classes.reject;
    } else {
      this.stylecard = classes.pending;
    }

    const opts = {
      height: '360',
      width: '100%',
    };

    return (
      <div>
        <Card className={`${classes.card}`}>
          <CardHeader
            className={this.stylecard}
            classes={{
              title: classes.title,
            }}
            style={{ heigt: '10px', padding: '5px', margintop: '5px' }}
            title={this.props.submittedBy}
            subheader={this.props.date}
            action={
              <Typography
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
          />
          <CardContent className={`${classes.cardContent}`} gutterBottom>
            {this.props.itemType === 'content' &&
              this.props.text && (
              <Typography component="p">
                {this.formatText(this.props.text)}
              </Typography>
            )}
            {this.props.itemType === 'image' &&
              this.props.image && (
                <CardMedia
                  className={classes.media}
                  image={this.props.image}
                  title={this.props.submittedBy}
                />
              )}
            {this.props.iframe && (
              <iframe
                src={get_url}
                style={{
                  width: '100%',
                  height: 360,
                }}
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            )}

            {this.props.video && (
              <div>
                <YouTube
                  videoId={video_id[1]}
                  opts={opts}
                  onReady={this._onReady}
                />
              </div>
            )}
          </CardContent>
          {this.props.status == 'pending' ? (
            <CardActions className={`${classes.cardAction}`}>
              <Button
                size="small"
                color="primary"
                className="reject"
                onClick={this.props.reject}
              >
                Reject
              </Button>
              <Button
                size="small"
                color="primary"
                className="accept"
                onClick={this.props.accept}
              >
                Accept
              </Button>
            </CardActions>
          ) : null}
        </Card>
      </div>
    );
  }
}

FeedCard.propTypes = {
  status: PropTypes.string,
  accept: PropTypes.func,
  reject: PropTypes.func,
  submittedBy: PropTypes.string,
  iframe: PropTypes.string,
  date: PropTypes.string,
  classes: PropTypes.object,
  itemType: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default withStyles(styles)(FeedCard);
