import React from 'react';
import KoreaTotal from './components/TotalData/KoreaTotal';
import Region from './components/RegionData/Region';
import './App.css';
import 'tachyons';
import axios from 'axios';
import total from './components/img/total.png'
import seoul from './components/img/seoul.png'
import incheon from './components/img/incheon.png'
import daejeon from './components/img/daejeon.png'
import daegu from './components/img/daegu.png'
import busan from './components/img/busan.png'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        total: {
          totalCase: 0,
          totalRecovered: 0,
          totalDeath: 0,
          totalCaseBefore: 0
        },
        seoul: {
          countryName: 'seoul',
          totalCase: 0,
          newCase: 0,
          recoverd: 0,
          death: 0,
        },
        busan: {
          countryName: 'busan',
          totalCase: 0,
          newCase: 0,
          recoverd: 0,
          death: 0,
        },
        daegu: {
          countryName: 'daegu',
          totalCase: 0,
          newCase: 0,
          recoverd: 0,
          death: 0,
        },
        incheon: {
          countryName: 'incheon',
          totalCase: 0,
          newCase: 0,
          recoverd: 0,
          death: 0,
        },
        daejeon: {
          countryName: 'daejeon',
          totalCase: 0,
          newCase: 0,
          recoverd: 0,
          death: 0,
        }
      }
    }
  }
  // 데이터 가져오기
  getData = async () => {
    const totalResponse = (await axios.get('https://api.corona-19.kr/korea/?serviceKey=uE5PJdHtIc9sQaG2wxiWqpe14nTXVbOo8')).data;
    console.log('getData for total', totalResponse.data);
    const regionResponse = (await axios.get('https://api.corona-19.kr/korea/country/new/?serviceKey=uE5PJdHtIc9sQaG2wxiWqpe14nTXVbOo8')).data;
    console.log('getData for region', regionResponse.data);
    this.setState({
      value: {
        total: {
          totalCase: totalResponse.TotalCase,
          totalRecovered: totalResponse.TotalRecovered,
          totalDeath: totalResponse.TotalDeath,
          totalCaseBefore: totalResponse.TotalCaseBefore
        },
        seoul: {
          countryName: regionResponse.seoul.countryName,
          totalCase: regionResponse.seoul.totalCase,
          newCase: regionResponse.seoul.newCase,
          recovered: regionResponse.seoul.recovered,
          death: regionResponse.seoul.death
        },
        busan: {
          countryName: regionResponse.busan.countryName,
          totalCase: regionResponse.busan.totalCase,
          newCase: regionResponse.busan.newCase,
          recovered: regionResponse.busan.recovered,
          death: regionResponse.busan.death
        },
        daegu: {
          countryName: regionResponse.daegu.countryName,
          totalCase: regionResponse.daegu.totalCase,
          newCase: regionResponse.daegu.newCase,
          recovered: regionResponse.daegu.recovered,
          death: regionResponse.daegu.death
        },
        incheon: {
          countryName: regionResponse.incheon.countryName,
          totalCase: regionResponse.incheon.totalCase,
          newCase: regionResponse.incheon.newCase,
          recovered: regionResponse.incheon.recovered,
          death: regionResponse.incheon.death
        },
        daejeon: {
          countryName: regionResponse.daejeon.countryName,
          totalCase: regionResponse.daejeon.totalCase,
          newCase: regionResponse.daejeon.newCase,
          recovered: regionResponse.daejeon.recovered,
          death: regionResponse.daejeon.death
        }
      }
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="center">
        <h1 style={{"textAlign" : "center"}}>코로나19 정보</h1>
        <div style = {{"display" : "flex", "margin-left" : "50px"}}>
          <KoreaTotal data={this.state.value.total} img = {total} />,
          <Region data={this.state.value.seoul} img ={seoul}/>,
          <Region data={this.state.value.busan} img ={busan}/>,
          <Region data={this.state.value.daegu} img ={daegu}/>,
          <Region data={this.state.value.incheon} img ={incheon}/>,
          <Region data={this.state.value.daejeon} img ={daejeon}/>
        </div>
      </div>
    );
  }
}

export default App;
