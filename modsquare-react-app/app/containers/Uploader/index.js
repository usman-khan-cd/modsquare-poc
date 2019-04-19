/**
 *
 * Uploader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';
import { toast } from 'react-toastify';
import makeSelectUploader from './selectors';
import reducer from './reducer';
import saga from './saga';
import Cards from '../../components/CardComp';
import BrowseImage from '../../components/BrowseImage';
import VideoBrowse from '../../components/VideoBrowse';
import ParagraphDialogue from '../../components/PragraphDialogue';
import ToolTip from '../../components/ToolTip';
import CustomizedTabs from '../../components/CustomTabs';
// import {}
import {CardLayout} from './styles';

import {
  fetchContentAction,
  uploadImageAction,
  uploadVideoAction,
  uploadParaAction,
  loadMoreAction,
  filterAction,
  onFilterChange,
  uplaodIframeAction,
} from './actions';
import IframDialogue from '../../components/IframDialogue';

/* eslint-disable react/prefer-stateless-function */
export class Uploader extends React.Component {
  state = {
    items: [],
    showDialogue: false,
    showVideoBrowse: false,
    showParagraph: false,
    showIframe: false,
    file: '',
    Url: '',
    Details: '',
    imagePreviewUrl: '',
    nextPage: 1,
    filter: 0,
    vertical: 'top',
    horizontal: 'center',
    open: false,
    Iframe: '',
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleonlclick = () => {
    console.log('in my handle click functions');
  };

  handleBrowse = () => {
    this.setState({ showDialogue: true });
  };

  handleCancel = () => {
    this.setState({ showDialogue: false });
  };

  handleVclose = () => {
    this.setState({ showVideoBrowse: false });
  };

  handleIframeclose = () => {
    this.setState({ showIframe: false });
  };

  handleVbrowse = () => {
    this.setState({ showVideoBrowse: true });
  };

  handlePbrowse = () => {
    this.setState({ showParagraph: true });
  };

  handleIbrowse = () => {
    this.setState({ showIframe: true });
  };

  handlePclose = () => {
    this.setState({ showParagraph: false });
  };

  handleUrlChange = e => {
    this.setState({ Url: e.target.value });
  };

  handleIUrlChange = e => {
    this.setState({ Iframe: e.target.value });
  };

  handleChange = e => {
    this.setState({ Details: e.target.value });
  };

  handleUsubmit = () => {
    const { Url } = this.state;
    if (Url) {
      this.props.uploadUrl(Url);
      this.setState({ showVideoBrowse: false });
    } else {
      toast.error('Url is empty', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  handleIframesubmit = () => {
    const { Iframe } = this.state;
    if (Iframe) {
      this.props.uploadIframe(Iframe);
      this.setState({ showIframe: false });
    } else {
      toast.error('Iframe is empty', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  handleIsubmit = () => {
    const { file } = this.state;
    if (file) {
      this.props.uploadImage(file);
      this.setState({ showDialogue: false, imagePreviewUrl: '', file: '' });
    } else {
      toast.error('file is empty', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  handleTsubmit = () => {
    const { Details } = this.state;
    if (Details) {
      this.props.uploadText(Details);
      this.setState({ showParagraph: false });
    } else {
      toast.error('Text is empty', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  handleMore = () => {
    const { nextPage } = this.state;
    this.props.loadMore(nextPage);
  };

  handleImage = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  handleFilterChange = id => {
    console.log(id);
  };

  onFilterTab = type => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 0:
        this.props.updateFilter('');
        this.props.FilAction('all');
        break;
      case 1:
        this.props.updateFilter('pending');
        this.props.FilAction('pending');
        break;
      case 2:
        this.props.updateFilter('accepted');
        this.props.FilAction('accepted');
        break;
      case 3:
        this.props.updateFilter('rejected');
        this.props.FilAction('rejected');
        break;
    }
  };

  componentDidMount() {
    this.props.fetchContent();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.uploader.items !== newProps.uploader.items) {
      this.setState({ nextPage: newProps.uploader.pagination.nextPage });
    }
  }

  render() {
    const { items } = this.props.uploader;
    const { nextPage, vertical, horizontal, open } = this.state;
    const {
      successUpload,
      successParagraph,
      successYoutube,
      errors,
    } = this.props.uploader;
    const options = { variant: 'success' };

    return (
      <CardLayout>
        <CustomizedTabs onfilter={this.onFilterTab} />
        {items &&
          items.map(item => (
            <Cards
              key={item._id}
              type={item.type}
              status={item.status}
              video={item.video}
              data={item.text}
              iframe={item.iframe}
              Date={item.create_date}
              click={this.handleonlclick}
              itemType={item.type}
              image={`${process.env.IMAGES_PATH}${item.image}`}
              user={`${item.user.first_name} ${item.user.last_name}`}
            />
          ))}

        <ToolTip
          onClick={this.handleBrowse}
          onVideo={this.handleVbrowse}
          onParagraph={this.handlePbrowse}
          onIframe={this.handleIbrowse}
        />
        {nextPage && (
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 530, marginTop: 30 }}
            onClick={this.handleMore}
          >
            Load More
          </Button>
        )}

        {this.state.showDialogue ? (
          <BrowseImage
            pimage={this.state.imagePreviewUrl}
            onCancel={this.handleCancel}
            image={e => this.handleImage(e)}
            handleImageSubmit={this.handleIsubmit}
          />
        ) : null}
        {this.state.showVideoBrowse ? (
          <VideoBrowse
            onVClose={this.handleVclose}
            UrlField={e => this.handleUrlChange(e)}
            handleUrlSubmit={this.handleUsubmit}
          />
        ) : null}
        {this.state.showParagraph ? (
          <ParagraphDialogue
            onPClose={this.handlePclose}
            Change={e => this.handleChange(e)}
            handletextSubmit={this.handleTsubmit}
          />
        ) : null}
        {this.state.showIframe ? (
          <IframDialogue
            onVClose={this.handleIframeclose}
            UrlField={e => this.handleIUrlChange(e)}
            handleUrlSubmit={this.handleIframesubmit}
          />
        ) : null}
      </CardLayout>
    );
  }
}

Uploader.propTypes = {
  //  dispatch: PropTypes.func.isRequired,
  // items: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  uploader: makeSelectUploader(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchContent: () => dispatch(fetchContentAction()),
    uploadImage: image => dispatch(uploadImageAction(image)),
    uploadUrl: url => dispatch(uploadVideoAction(url)),
    uploadIframe: iframe => dispatch(uplaodIframeAction(iframe)),
    uploadText: text => dispatch(uploadParaAction(text)),
    loadMore: nextPage => dispatch(loadMoreAction(nextPage)),
    FilAction: id => dispatch(filterAction(id)),
    updateFilter: type => dispatch(onFilterChange(type)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'uploader', reducer });
const withSaga = injectSaga({ key: 'uploader', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(withSnackbar(Uploader));
