import React from 'react';
const rootContext = React.createContext();
const Provider = rootContext.Provider;

const GlobalProvider = (Child) => {
  return class ParentProvider extends React.Component {
    state = {
      VariousMenu: [
        {
          name: 'Cocho Series',
          selected: true,
          taste: [
            {
              name: 'Coklat Mangga',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Stroberi',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
          ],
        },
        {
          name: 'Yakult Series',
          selected: true,
          taste: [
            {
              name: 'Coklat Mangga',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Stroberi',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
            {
              name: 'Coklat Duren',
              pngUrl: './img/Menu.png',
              webpUrl: './img/Menu.webp',
            },
          ],
        },
      ],
    };
    render() {
      return (
        <Provider value={this.state}>
          <Child />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

const Consumer = rootContext.Consumer;
const GlobalConsumer = (Child) => {
  return class ParentConsumer extends React.Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Child {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};

export { GlobalConsumer };
