import React from 'react';
import { useState, useEffect } from 'react';
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

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: {
  //       total: {
  //         totalCase: 0,
  //         totalRecovered: 0,
  //         totalDeath: 0,
  //         totalCaseBefore: 0
  //       },
  //       seoul: {
  //         countryName: 'seoul',
  //         totalCase: 0,
  //         newCase: 0,
  //         recoverd: 0,
  //         death: 0,
  //       },
  //       busan: {
  //         countryName: 'busan',
  //         totalCase: 0,
  //         newCase: 0,
  //         recoverd: 0,
  //         death: 0,
  //       },
  //       daegu: {
  //         countryName: 'daegu',
  //         totalCase: 0,
  //         newCase: 0,
  //         recoverd: 0,
  //         death: 0,
  //       },
  //       incheon: {
  //         countryName: 'incheon',
  //         totalCase: 0,
  //         newCase: 0,
  //         recoverd: 0,
  //         death: 0,
  //       },
  //       daejeon: {
  //         countryName: 'daejeon',
  //         totalCase: 0,
  //         newCase: 0,
  //         recoverd: 0,
  //         death: 0,
  //       }
  //     }
  //   }
  // }

  const [totalData, setTotalData] = useState({
    totalCase: 0,
    totalRecovered: 0,
    totalDeath: 0,
    totalCaseBefore: 0
  });
  const [seoulData, setSeoulData] = useState({
    countryName: '서울',
    totalCase: 0,
    newCase: 0,
    recoverd: 0,
    death: 0,
  });
  const [incheonData, setIncheonData] = useState({
    countryName: '인천',
    totalCase: 0,
    newCase: 0,
    recoverd: 0,
    death: 0,
  });
  const [daejeonData, setDaejeonData] = useState({
    countryName: '대전',
    totalCase: 0,
    newCase: 0,
    recoverd: 0,
    death: 0,
  });
  const [daeguData, setDaeguData] = useState({
    countryName: '대구',
    totalCase: 0,
    newCase: 0,
    recoverd: 0,
    death: 0,
  });
  const [busanData, setBusanData] = useState({
    countryName: '부산',
    totalCase: 0,
    newCase: 0,
    recoverd: 0,
    death: 0,
  });


  // 데이터 가져오기
  const getData = async () => {
    const totalResponse = (await axios.get('https://api.corona-19.kr/korea/?serviceKey=uE5PJdHtIc9sQaG2wxiWqpe14nTXVbOo8')).data;
    console.log('getData for total', totalResponse);
    const regionResponse = (await axios.get('https://api.corona-19.kr/korea/country/new/?serviceKey=uE5PJdHtIc9sQaG2wxiWqpe14nTXVbOo8')).data;
    console.log('getData for region', regionResponse);

    setData(totalResponse, regionResponse);
  }

  function setData(totalResponse, regionResponse) {
    setTotalData((prevState) => {
      console.log('total');
      return {
        ...prevState,
        totalCase: totalResponse.TotalCase,
        totalRecovered: totalResponse.TotalRecovered,
        totalDeath: totalResponse.TotalDeath,
        totalCaseBefore: totalResponse.TotalCaseBefore
      }
    })
    setSeoulData((prevState) => {
      console.log('seoul');

      return {
        ...prevState,
        totalCase: regionResponse.seoul.totalCase,
        newCase: regionResponse.seoul.newCase,
        recovered: regionResponse.seoul.recovered,
        death: regionResponse.seoul.death
      }
    })
    setIncheonData((prevState) => {
      return {
        ...prevState,
        totalCase: regionResponse.incheon.totalCase,
        newCase: regionResponse.incheon.newCase,
        recovered: regionResponse.incheon.recovered,
        death: regionResponse.incheon.death
      }
    })
    setDaejeonData((prevState) => {
      return {
        ...prevState,
        totalCase: regionResponse.daejeon.totalCase,
        newCase: regionResponse.daejeon.newCase,
        recovered: regionResponse.daejeon.recovered,
        death: regionResponse.daejeon.death
      }
    })
    setDaeguData((prevState) => {
      return {
        ...prevState,
        totalCase: regionResponse.daegu.totalCase,
        newCase: regionResponse.daegu.newCase,
        recovered: regionResponse.daegu.recovered,
        death: regionResponse.daegu.death
      }
    })
    setBusanData((prevState) => {
      return {
        ...prevState,
        totalCase: regionResponse.busan.totalCase,
        newCase: regionResponse.busan.newCase,
        recovered: regionResponse.busan.recovered,
        death: regionResponse.busan.death
      }
    })
  }
  // componentDidMount() {
  //   this.getData();
  // }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="center">
      <h1 style={{ "textAlign": "center" }}>코로나19 정보</h1>
      <div style={{ "display": "flex", "margin-left": "50px" }}>
        <KoreaTotal data={totalData} img={total} />,
        <Region data={seoulData} img={seoul} />,
        <Region data={busanData} img={busan} />,
        <Region data={daeguData} img={daegu} />,
        <Region data={incheonData} img={incheon} />,
        <Region data={daejeonData} img={daejeon} />
      </div>
    </div>
  );
}

export default App;
