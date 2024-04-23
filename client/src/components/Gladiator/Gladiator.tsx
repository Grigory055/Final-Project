import { Button } from '@mui/material';
import  {  useState } from 'react';
import styles from './Gladiatot.module.css'

interface IGladiator {
  name: string;
  img: string;
  weapon: string;
  hp: number;
  sp: number;
  strength: number; // сила
  level: number; // уровень
  exp: number; // опыт
}

interface IWeapons {
  name: string;
  damage: number;
}

// interface IStatus {
//   status: any;
// }

const Denisius: IGladiator = {
  name: 'Денисиус',
  img: 'den.gif',
  weapon: '',
  hp: 100,
  sp: 100,
  strength: 10,
  level: 10,
  exp: 10,
};

const Grigorius: IGladiator = {
  name: 'Григориус',
  img: 'grig.gif',
  weapon: '',
  hp: 100,
  sp: 100,
  strength: 10,
  level: 10,
  exp: 10,
};

const Antonius: IGladiator = {
  name: 'Антониус',
  img: 'ant.gif',
  weapon: '',
  hp: 100,
  sp: 100,
  strength: 10,
  level: 10,
  exp: 10,
};

const Maksimius: IGladiator = {
  name: 'Максимиус',
  img: 'max.gif',
  weapon: '',
  hp: 100,
  sp: 100,
  strength: 10,
  level: 10,
  exp: 10,
};

const Svetlanius: IGladiator = {
  name: 'Светланиус',
  img: 'svet.gif',
  weapon: '',
  hp: 100,
  sp: 100,
  strength: 10,
  level: 10,
  exp: 10,
};

const Sword: IWeapons = {
  name: 'меч',
  damage: 25,
};
const Spear: IWeapons = {
  name: 'копьё',
  damage: 20,
};
const Trident: IWeapons = {
  name: 'трезубец',
  damage: 22,
};
const Mace: IWeapons = {
  name: 'булаву',
  damage: 28,
};
const Whip: IWeapons = {
  name: 'кнут',
  damage: 8,
};
const Axe: IWeapons = {
  name: 'топор',
  damage: 30,
};

const gladArr = [Denisius, Svetlanius, Grigorius, Antonius, Maksimius];
const weaponsArr = [Sword, Spear, Trident, Mace, Whip, Axe];
const fight = [
  'отразил удар',
  'за Эльбрус и двор',
  'нанёс удар',
  'нанёс колоссальный урон',
  'ушёл читать лекцию',
  'уничтожает',
  'зовёт HELP',
];

export default function Gladiator() {
  const [gladiator1, setGladiator1] = useState<IGladiator>();
  const [gladiator2, setGladiator2] = useState<IGladiator>();

  const [status, setStatus] = useState<string>('1');

  const [weapon1, setWeapon1] = useState<IWeapons>();
  const [weapon2, setWeapon2] = useState<IWeapons>();

  const [reserved1, setReserved1] = useState<any>('');
  const [reserved2, setReserved2] = useState<any>('');

  const [game1, setGame1] = useState<any>('');
  const [game2, setGame2] = useState<any>('');

  const [attack1, setAttack1] = useState<any>('');
  const [attack2, setAttack2] = useState<any>('');

  const [game3, setGame3] = useState<any>('');
  const [game4, setGame4] = useState<any>('');

  const [game5, setGame5] = useState<any>('');
  const [game6, setGame6] = useState<any>('');

  const [imgWin1, setImgWin1] = useState<any>('');
  const [imgWin2, setImgWin2] = useState<any>('');

  const handlerWeapons = () => {
    // первый боец
    const glad1 = gladArr[Math.floor(Math.random() * gladArr.length)];
    const weap1 = weaponsArr[Math.floor(Math.random() * weaponsArr.length)];
    const weap2 = weaponsArr[Math.floor(Math.random() * weaponsArr.length)];
    setStatus(() => '2')
    if (glad1.name === 'Светланиус') {
      setTimeout(() => {
        setGladiator1(() => glad1);
        console.log(glad1);
        setReserved1(() => 'получила');
        setWeapon1(() => weap1);
        glad1.weapon += weap1?.name;
      }, 100);
    } else {
      setTimeout(() => {
        setGladiator1(() => glad1);
        console.log(glad1);
        setReserved1(() => 'получил');
        setWeapon1(() => weap1);
        glad1.weapon += weap1?.name;
        // setStatus(() => '2')

        console.log('glad1', glad1.name);
      }, 100);
    }

    // второй боец
    const glad2 = gladArr[Math.floor(Math.random() * gladArr.length)];
    if (glad1 !== glad2) {
      if (glad2.name === 'Светланиус') {
        setTimeout(() => {
          setGladiator2(() => glad2);
          setReserved2(() => 'получила');
          setWeapon2(() => weap2);

          glad2.weapon += weap2?.name;
          console.log('glad2', glad2);
        }, 500);
      } else {
        setTimeout(() => {
          setGladiator2(() => glad2);
          setReserved2(() => 'получил');
          setWeapon2(() => weap2);

          glad2.weapon += weap2?.name;
          console.log('glad2', glad2);
        }, 500);
      }
    } else {
      const newSArr = gladArr.filter((el) => el !== glad2);
      const pl2 = newSArr[Math.floor(Math.random() * newSArr.length)];
      // console.log('попал в else', gladArr)
      if (pl2.name === 'Светланиус') {
        setTimeout(() => {
          setGladiator2(() => pl2);
          setReserved2(() => 'получила');
          // console.log(glad2)
          setWeapon2(() => weap2);

          pl2.weapon += weap2?.name;
          console.log('pl2', pl2);
        }, 500);
      } else {
        setTimeout(() => {
          setGladiator2(() => pl2);
          setReserved2(() => 'получил');
          // console.log(glad2)
          setWeapon2(() => weap2);

          pl2.weapon += weap2?.name;
          console.log('pl2', pl2);
        }, 500);
      }
    }
  };

  const handleFight = () => {
    // setTimeout(() => {
    const player1:any = gladiator1;
    setGame1(() => player1);
    setAttack1(() => fight[Math.floor(Math.random() * fight.length)]);
    // }, 1000);

    // setTimeout(() => {
    // const player2 = arrGame.filter((el) => el !== player1)
    const player2:any = gladiator2;
    setGame2(() => player2);
    // setGame2(() => player2[Math.floor(Math.random() * player2.length)]) //! 2
    setAttack2(() => fight[Math.floor(Math.random() * fight.length)]);
    // }, 2000);

    if (attack1 === 'ушёл читать лекцию') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
    }
    if (attack2 === 'ушёл читать лекцию') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
    }

    if (attack1 === 'отразил удар' && game1) {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp += 15;
    }
    if (attack2 === 'отразил удар' && game2) {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp += 15;
    }

    if (attack1 === 'уничтожает') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 25;
    }
    if (attack2 === 'уничтожает') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 25;
    }

    if (attack1 === 'нанёс колоссальный урон') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 30;
    }
    if (attack2 === 'нанёс колоссальный урон') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 30;
    }

    if (attack1 === 'зовёт HELP') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      // alert(`Сомнительно, что ${game1.name} зовёт HELP, ну OKEY`);
    }
    if (attack2 === 'зовёт HELP') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      // alert(`Сомнительно, что ${game2.name} зовёт HELP, ну OKEY`);
    }
    if (attack1 === 'за Эльбрус и двор') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      // alert(`Сомнительно, что ${game1.name} зовёт HELP, ну OKEY`);
    }
    if (attack2 === 'за Эльбрус и двор') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      // alert(`Сомнительно, что ${game2.name} зовёт HELP, ну OKEY`);
    }
    //! ===== здесть нанёс удар

    if (attack1 === 'нанёс удар' && game1.weapon === 'меч') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 7;
      // console.log('нанёс удар меч', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'меч') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 7;
      // console.log('нанёс удар меч', game1.hp)
    }
    if (attack1 === 'нанёс удар' && game1.weapon === 'копьё') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 8;
      // console.log('нанёс удар копьё', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'копьё') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 8;
      // console.log('нанёс удар копьё', game1.hp)
    }

    // if (attack1 === 'нанёс удар' && game2.weapon === 'трезубец') {
    //   const newFight = fight.filter((el) => el !== attack1);
    //   setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
    //   game1.hp -= 11;
    //   // console.log('нанёс удар трезубец', game2.hp)
    // }
    // if (attack2 === 'нанёс удар' && game1.weapon === 'трезубец') {
    //   const newFight = fight.filter((el) => el !== attack2);
    //   setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
    //   game2.hp -= 11;
    //   // console.log('нанёс удар трезубец', game1.hp)
    // }
    if (attack1 === 'нанёс удар' && game1.weapon === 'трезубец') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 11;
      // console.log('нанёс удар трезубец', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'трезубец') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 11;
      // console.log('нанёс удар трезубец', game1.hp)
    }

    if (attack1 === 'нанёс удар' && game1.weapon === 'булаву') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 15;
      // console.log('нанёс удар булава', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'булаву') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 15;
      // console.log('нанёс удар булава', game1.hp)
    }
    if (attack1 === 'нанёс удар' && game1.weapon === 'кнут') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 4;
      // console.log('нанёс удар кнут', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'кнут') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 4;
      // console.log('нанёс удар кнут', game1.hp)
    }
    if (attack1 === 'нанёс удар' && game1.weapon === 'топор') {
      const newFight = fight.filter((el) => el !== attack1);
      setAttack2(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game2.hp -= 14;
      // console.log('нанёс удар топор', game2.hp)
    }
    if (attack2 === 'нанёс удар' && game2.weapon === 'топор') {
      const newFight = fight.filter((el) => el !== attack2);
      setAttack1(() => newFight[Math.floor(Math.random() * newFight.length)]);
      game1.hp -= 14;
      // console.log('нанёс удар топор', game1.hp)
    }
    //! ======= НИЗ КОДА УДАРА МЕЧОМ

    if (game1.hp < 20) {
      setGame3(() => `Мало сил у ${game1.name}а`);
    }
    if (game2.hp < 20) {
      setGame4(() => `Мало сил у ${game2.name}а`);
    }

    if (game1.hp < 0) {
      // setStatus((pre) => '3')
      setGame5(() => `${game2.name} выиграл`);
      setImgWin2(() => gladiator2?.img);
      setImgWin1(() => gladiator1?.img);
      setGladiator1(() => ({}));
      setGladiator2(() => ({}));
      setAttack1(() => '');
      setAttack2(() => '');
      setGame1(() => '');
      setGame2(() => '');
      setGame3(() => '');
      setGame4(() => '');
      setReserved1(() => '');
      setReserved2(() => '');
      setWeapon1(() => ({}));
      setWeapon2(() => ({}));
      // alert(`${game2.name} выиграл`);
      
      console.log('game5', game5)
    }

    if (game2.hp < 0) {
      // setStatus((pre) => '3')
      setGame6(() => `${game1.name} выиграл`);
      setImgWin1(() => gladiator1?.img);
      setImgWin2(() => gladiator2?.img);
      setGladiator1(() => ({}));
      setGladiator2(() => ({}));
      setAttack1(() => '');
      setAttack2(() => '');
      setGame1(() => '');
      setGame2(() => '');
      setGame3(() => '');
      setGame4(() => '');
      setReserved1(() => '');
      setReserved2(() => '');
      setWeapon1(() => ({}));
      setWeapon2(() => ({}));
      // alert(`${game1.name} выиграл`);
      
      
    console.log('game6', game6.name)
    }

    
  };

  return (
    <>
      {(() => {
        switch (status) {
          case '1':
            return (
              <div>
                {/* <StepGrass/> */}
                <Button onClick={() => handlerWeapons()}>Раздача оружия</Button>
                <div style={{ width: '600px'}}>
                  {gladiator1?.img ? (
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={`/${gladiator1?.img}`}
                    />
                  ) : (
                    <></>
                  )}{' '}
                  <h1>{gladiator1?.name} {game1.hp} {reserved1} {weapon1?.name}</h1>
                </div>

                <div style={{ width: '600px'}}>
                  {gladiator2?.img ? (
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={`/${gladiator2?.img}`}
                    />
                  ) : (
                    <></>
                  )}{' '}
                  {gladiator2?.name} {game2.hp} {reserved2} {weapon2?.name}
                </div>
              </div>
            );
          case '2':
            return (
              <>
              <div style={{ width: '750px' }}>
                {/* <StepGrass/> */}
                {/* <Button onClick={() => handlerWeapons()}>Раздача оружия</Button> */}
                <div style={{ width: '700px', fontSize: '28px'}}>
                  {gladiator1?.img ? (
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={`/${gladiator1?.img}`}
                    />
                  ) : (
                    <></>
                  )}{' '}
                  {gladiator1?.name} <span style={{ fontSize: '35px', color: 'green', fontWeight: '00'}}>{game1.hp}</span> {reserved1} {weapon1?.name}
                </div>

                <div style={{ width: '700px', fontSize: '28px'}}>
                  {gladiator2?.img ? (
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={`/${gladiator2?.img}`}
                    />
                  ) : (
                    <></>
                  )}{' '}
                  {gladiator2?.name} <span style={{ fontSize: '35px', color: 'green', fontWeight: '00'}}>{game2.hp}</span> {reserved2} {weapon2?.name}
                </div>
              </div>
              <div>
                {game5 || game6 ? (
                  <div style={{ fontSize: '50px', color: 'green'}}>
                    <img className={styles.imgGlad} style={{ width: '100px', height: '100px', visibility: 'visible' }} src={`/${imgWin1}`} />{game5} {game6}<img className={styles.imgGlad} style={{ width: '100px', height: '100px', visibility: 'visible' }} src={`/${imgWin2}`} />
                    </div>
                ) : (<><Button onClick={() => handleFight()}>Атака</Button>
                 <h1 style={{ width: '700px', fontSize: '25px' }}>
                   {game1.name} {attack1}
                 </h1>
                 <h1 style={{ color: 'red' }}>{game3}</h1>
                 <h1 style={{ width: '700px', fontSize: '25px' }}>
                   {game2.name} {attack2}
                 </h1>
                 <h1 style={{ color: 'red' }}>{game4}</h1>
                 </>)}
                
              </div>
              </>
            );
            // case '3':
            //   return (
            //     <>
            //     <div>
            //       Продолжай путь к вершине Эльбруса
            //     </div>
            //     </>
            //   )
        }
      })()}
    </>
  );
}
