import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: null,
      dataIsReturned: false,
    };
  }

  options = {
    loop: true,
    margin: 30,
    dots: false,
    navText: [
      "<img src='./img/icon/prev.svg' alt='next button'>",
      "<img src='./img/icon/next.svg' alt='next button'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        nav: true,
        items: 2,
      },
      1000: {
        nav: true,
        items: 3,
      },
    },
  };
  loadData = async () => {
    const responseJson = await fetch('http://localhost:4000/categories');
    const data = await responseJson.json();
    return data;
  };
  async componentDidMount() {
    this.setState({
      datas: await this.loadData(),
      dataIsReturned: true,
    });
  }

  returnData(selected) {
    
    return this.state.datas
      .filter((datas) => datas.category === selected)
      .map((item) => <MenuItem key={item.id} name={item.name} />);
  }

  renderCarousel() {
    return (
      <OwlCarousel className="owl-one" {...this.options}>
        {this.returnData(this.props.selected)}
      </OwlCarousel>
    );
  }

  render() {
    // console.log(this.state.dataIsReturned);
    if (this.state.dataIsReturned) {
      return <div className="my-carousel-1">{this.renderCarousel()}</div>;
    } else {
      return null;
    }
  }
}

export default MenuList;
