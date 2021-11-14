import React from 'react';

const KoreaTotal = ({ data, img }) => {
    console.log('case', data);
    const totalCase = data.totalCase
    const totalRecovered = data.totalRecovered;
    const totalDeath = data.totalDeath;
    const totalCaseBefore = data.totalCaseBefore;

    return (
        <div>
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src= {img} class="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                    <h1 class="f4">국내 전체</h1>
                    <hr class="mw5 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 black-70">
                    <div>
                        국내 총 확진자 수 : {totalCase}
                    </div>
                    <div>
                        국내 완치자 수 : {totalRecovered}
                    </div>
                    <div>
                        국내 사망자 수 : {totalDeath}
                    </div>
                    <div>
                        오늘 확진자 수 : {totalCaseBefore}
                    </div>
                </p>
            </article>
        </div>
    );
}

export default KoreaTotal;