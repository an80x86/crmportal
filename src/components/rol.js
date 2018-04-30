import React, {Component} from 'react'

import { connect } from 'react-redux';
import { rolListAll } from '../actions';
import { bindActionCreators } from 'redux';

class Rol extends Component {
    getComponent(index) {
        this.props.rolListAll(index)
    }

    componentWillMount() {
        this.props.rolListAll(1)
    }

    render() {
        console.log(this.props.rols.artistList);
        let nesne = this.props.rols.artistList;
        if (nesne === undefined) return ('')

        return (
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Rol İşlemleri
                                <small>Bu menüden kullanıcı gruplarına rol ekleme çıkartma işlemi yapabilirsiniz.</small>
                            </h2>
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>FIRST NAME</th>
                                        <th>LAST NAME</th>
                                        <th>USERNAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.props.rols.artistList.map((alt) =>
                                            <tr key={alt.id}>
                                                <th scope="row">{alt.id}</th>
                                                <td>{alt.name}</td>
                                                <td>{alt.cover}</td>
                                                <td>{alt.bio}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-3">
                                <ul className="pagination">
                                    <li><a className="disabled">&nbsp;</a></li>
                                    <li className="active"><a onClick={this.getComponent.bind(this, 1)}>1</a></li>
                                    <li><a onClick={this.getComponent.bind(this, 2)}>2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        rols:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({rolListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Rol)
