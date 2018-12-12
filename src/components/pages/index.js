import React, { PureComponent, Fragment } from 'react';
import { compose } from 'react-apollo'
import { composeData } from '../assets/query';
const withContainer = WrapperComponent => {
    return class RootHome extends PureComponent {
        render() {
            const { loading, items, onChange, styles } = this.props;
            return <WrapperComponent 
            loading={loading}
            items={items}
            onChange={onChange}
            styles={styles}
            />
        }
    }
}



const Home = ({ loading, items, onChange, styles, }) => {
    return (
    <Fragment>
        <input
          style={styles.input}
          onChange={onChange.bind(this)}
          placeholder='Search for ice cream'
        />
        {
          !!loading && (
            <p>Searching...</p>
          )
        }
        {
          !loading && !items.length && (
            <p>Sorry, no results.</p>
          )
        }
        {
          !loading && items.map((item, index) => (
            <div key={index} style={styles.container}>
              <p style={styles.title}>{item.name}</p>
              <p style={styles.description}>{item.description}</p>
            </div>
          ))
        }
      </Fragment>
    )
}
const RunHome = withContainer(Home)


export default compose(composeData)(RunHome)