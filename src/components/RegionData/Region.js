import React from 'react';

const Region = ({ data, img }) => {
    console.log('Region', data.countryName);
    const countryName = data.countryName;
    const totalCase = data.totalCase;
    const newCase = data.newCase
    const recovered = data.recovered;
    const death = data.death;

    return (
        <div>
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src= {img} class="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                    <h1 class="f4">{countryName}</h1>
                    <hr class="mw5 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 black-70">
                    <div>
                        {countryName} 총 확진자 수 : {totalCase}
                    </div>
                    <div>
                        {countryName} 완치자 수 : {recovered}
                    </div>
                    <div>
                        {countryName} 사망자 수 : {death}
                    </div>
                    <div>
                        {countryName} 오늘 확진자 수 : {newCase}
                    </div>
                </p>
            </article>
        </div>
    );
}

export default Region;