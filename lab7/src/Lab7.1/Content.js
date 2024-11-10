import React, { Component } from 'react';

const colors = ["lightgreen", "lightblue"];
const textColors = ["black", "purple"];

let wasEnabled = false;
let colorQueue1 = 0;
let colorQueue2 = 0;

class Content extends Component {
    constructor(props) {
      super(props);
      this.element7 = React.createRef();
      this.element8 = React.createRef();
    }
  
    componentDidMount() {
      const el7 = this.element7.current;
      const el8 = this.element8.current;
  
      const handleClick7 = () => {
        if (wasEnabled === false) {
          el8.innerText = "Комп'ютерні ігри.  <---------------- а тепер сюди";
          el7.innerText = "Спати.";
          wasEnabled = true;
        }
        el7.style.backgroundColor = colors[colorQueue1];
        el7.style.color = textColors[colorQueue1];
  
        colorQueue1 = colorQueue1 === 0 ? 1 : 0;
      };
  
      const handleClick8 = () => {
        el8.innerText = "Комп'ютерні ігри.";
  
        el8.style.backgroundColor = colors[colorQueue2];
        el8.style.color = textColors[colorQueue2];
  
        colorQueue2 = colorQueue2 === 0 ? 1 : 0;
      };
  
      el7.addEventListener("click", handleClick7);
      el8.addEventListener("click", handleClick8);
  
      this.cleanup = () => {
        el7.removeEventListener("click", handleClick7);
        el8.removeEventListener("click", handleClick8);
      };
    }
  
    componentWillUnmount() {
      this.cleanup();
    }
  
    render() {
      return (
        <div className='content'>
          <p>Хоббі:</p>
          <ul>
            <li>Комп'ютерні ігри.</li>
            <li ref={this.element7}>Спати. {"<"}---------------- натисніть сюди</li>
            <li ref={this.element8}>Комп'ютерні ігри.</li>
            <li>Комп'ютерні ігри.</li>
          </ul>
          Улюблені медіа:
          <ol>
            <li>"Kage no Jitsuryokusha ni Naritakute!", "Сходження в Тіні", 2022</li>
            <li>"Kage no Jitsuryokusha ni Naritakute! 2nd Season", "Сходження в тіні (2 сезон)", 2023</li>
            <li>"Bakemonogatari", "Історії монстрів", 2009</li>
            <li>"Nisemonogatari", "Історії підробок", 2012</li>
          </ol>
          <p>
            Херсо́н {"(МФА: [xerˈsɔn̪])"} — місто на півдні України, адміністративний центр міської громади та Херсонського району Херсонської області. Розташоване на правому високому березі Дніпра. Важливий економічний центр півдня України. Значний залізничний вузол на лінії Миколаїв — Снігурівка — Джанкой, морський торговельний та річковий порт. Херсон має місто-супутник Олешки.<br />
            6 березня 2022 року Указом Президента України, з метою відзначення подвигу, масового героїзму та стійкості громадян, виявлених у захисті своїх міст під час відсічі збройної російського вторгнення в Україну, місту присвоєно почесну відзнаку «Місто-герой України». З початку березня 2022 року місто перебувало під тимчасовою російською окупацією, проте 11 листопада 2022 року під час контрнаступу в Херсонській області України місто було визволене Збройними силами України від російських окупантів.
          </p>
        </div>
      );
    }
  }
  
  export default Content;
