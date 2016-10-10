import React, { Component } from 'react';
const ReactDOM = require('react-dom')
import axios from 'axios';

export default class App extends Component {
  // var test;

  componentDidMount() {
    axios.get('/api')
      .then(res => console.log(res.data))
      // .then(res => this.test=res.data)
      .catch(err => console.error(err))
  }

  render() {
    return (
      <h1>Hello, guys.</h1>
      // {this.test}
    );
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)

// const React = require('react');
// const ReactDOM = require('react-dom')
// // const client = require('client');
//
// class App extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		// this.state = {entities: []};
// 		this.state = {entities: []};
// 	}
//
// 	// componentDidMount() {
// 	// 	client({method: 'GET', path: '/api'}).done(response => {
// 	// 	// client({method: 'GET', path: '/api'}).done(response => {
// 	// 		this.setState({entities: response.entity._embedded.entities});
// 	// 	});
// 	// }
//
// 	render() {
// 		return (
// 			<EntityList entities={this.state.entities}/>
// 		)
// 	}
// }
//
// class EntityList extends React.Component{
// 	// render() {
// 	// 	// var entities = this.props.entities.map(entity =>
// 	// 		// <Entity key={entity._links.self.href} entity={entity}/>
// 	// 	// );
// 	// 	// return (
// 	// 		<table>
// 	// 			<tbody>
// 	// 				<tr>
// 	// 					<th>ID</th>
// 	// 					<th>Content</th>
// 	// 					<th>Favorite Number</th>
// 	// 				</tr>
// 	// 				{this.props.entities}
// 	// 			</tbody>
// 	// 		</table>
// 	// 	// )
// 	// // }
// 	render() {
//     // var entities = this.props.entities;
//
//     return (
// 			<table>
// 				<tbody>
// 					<tr>
// 						<th>ID</th>
// 						<th>Content</th>
// 						<th>Favorite Number</th>
// 					</tr>
// 					test
// 				</tbody>
// 			</table>
//     )
// 	}
// }
//
// class Entity extends React.Component{
// 	render() {
// 		return (
// 			<tr>
// 				<td>{this.props.entity.id}</td>
// 				<td>{this.props.entity.content}</td>
// 				<td>{this.props.entity.favoriteNumber}</td>
// 			</tr>
// 		)
// 	}
// }
//
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('react')
// )
//
//
// // import React, { Component } from 'react';
// // import { Link } from 'react-router';
// // import { connect } from 'react-redux';
// // import { getSession } from 'reducers/authentication';
// // import { setLocale } from 'reducers/locale';
// // import counterpart from 'counterpart';
// // import { locales } from 'config/translation';
// //
// // import 'stylus/main.styl';
// //
// // var LocaleSwitcher = ({currentLocale, onLocaleChange}) => (
// //   <select value={currentLocale} onChange={e => onLocaleChange(e.target.value)}>
// //     {locales.map(lang => <option key={lang} value={lang}>{lang}</option>)}
// //   </select>
// // );
// //
// // const TopMenu = (props) => {
// //   const items = props.items.map((item, key) => (
// //     <li key={key} className="pure-menu-item">
// //       <Link to={item.link} className="pure-menu-link">{item.label}</Link>
// //     </li>
// //   ));
// //   return (
// //     <div className="pure-menu pure-menu-horizontal">
// //       <ul className="pure-menu-list">
// //         {items}
// //       </ul>
// //       <LocaleSwitcher currentLocale={props.currentLocale} onLocaleChange={props.setLocale} />
// //     </div>
// //   );
// // };
// //
// // export class App extends Component {
// //
// //   componentDidMount() {
// //     this.props.getSession();
// //   }
// //
// //   render() {
// //     const {currentLocale, setLocale} = this.props;
// //     const menuItems = [
// //       {label: 'Home', link: '/'},
// //       this.props.isAuthenticated ? {label: 'Logout', link: '/logout'} : {label: 'Login', link: '/login'},
// //       {label: 'Private page', link: '/private'}
// //     ];
// //
// //     return (
// //       <div id="application">
// //         <TopMenu items={menuItems} currentLocale={currentLocale} setLocale={setLocale}/>
// //         {this.props.children}
// //       </div>
// //     );
// //   }
// // }
// //
// // export default connect(
// //   state => ({isAuthenticated: state.authentication.isAuthenticated, currentLocale: state.locale.currentLocale}),
// //   {getSession, setLocale}
// // )(App);
