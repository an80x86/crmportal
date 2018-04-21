import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { artistListAll,artistList } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

import Loader from '../components/loader';
import Overlay from '../components/overlay';
import Navbar from '../components/navbar';

import LeftSideBar from '../components/leftsidebar';

class HomeContainer extends Component {

    componentWillMount() {
        this.props.artistListAll()
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key)
    }

    render(){
        //console.log(this.props);
        return (
            <div>

                <Overlay />
                <Navbar />
                <section>
                  <LeftSideBar />
                  <section className="content">
                    <div className="container-fluid">

                      <Search keywords={this.getKeywords}/>
                      <Artistlist artists={this.props.artists.artistList}/>

                    </div>
                  </section>
                </section>
            </div>
        )
    }

}


function mapStateToProps(state){
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll,artistList},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
