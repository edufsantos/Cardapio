import styled from 'styled-components';
import imgBg from '../../assets/bg.jpg';
import imgBg2 from '../../assets/bg2.jpg';


export const Header = styled.header`  
  padding: 15px 30px;
  height: 50px;
  background: #fff;
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 3px 1px -2px rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.14);
  z-index: 1;

  svg{
    cursor: pointer;
  }
  h1{
    font-size: 18px;
    font-weight: 700;
    line-height: 2.44;
    letter-spacing: .13px;
    color: #ed1c24;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
   
  }
  @media (max-width: 600px){
    padding: 15px;
   
  }
`
export const Container = styled.div`

  padding: 0 20%;
  max-width: 1300px;
  background: #F8F8F8;
  height: 100%;
  font-family: 'Roboto', sans-serif;

  section.apresentation{
    padding: 60px 0 0;
    display: flex;
    flex-direction: column;
    font-weight: bold;

  }
  section.apresentation h5{
      font-size: 26px
  }
  section.apresentation h1{
    line-height: 1.3em;
  
    font-size: 36px;

  }
  section.apresentation .image{
    border-radius: 15px;
    width: 100%;
    height: 260px;
    margin-top: 15px;
    background: url(${imgBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .list-cat{
    padding: 60px 0;
    width: 100%
  }
  .list-cat ul li{
      font-size: 24px;
      width: 100%;
      min-height: 72px;
      border-radius: 10px;
      box-shadow: 0 2px 4px 0 hsla(0,0%,87.5%,.5);
      border: 1px solid rgba(0,0,0,.1);
      background-color: #fff;
      margin-bottom: 16px;
      padding: 8px 16px 8px 24px;
      color: black;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      line-height: 1.15;
      display: flex;
      align-items: center;
  }
  .list-cat ul li p{
      margin-left: 15px
  }
  
  @media (max-width: 600px){
    padding: 0 5%;

    .list-cat ul li{
      width: auto;
    }
    
  }
`;
export const ContainerModal = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    background: #F8F8F8;
    width: calc(100vw - 32px);
    font-family: 'Roboto', sans-serif;
    padding: 60px 16px 0;
    
  ul.modal-ul {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  ul.modal-ul li .item{
    padding: 30px 15px;
    margin-bottom: 15px;
    background: #fff;
    display: flex;
    justify-content: space-between
  }
  ul.modal-ul li .item .item-texts{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;

  }
  ul.modal-ul li .item .item-texts p{
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: .5px;
    color: #575757;
    width: 100%;
    margin: 15px 0;
  }
  ul.modal-ul li .item .item-texts h1{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .25px;
  }
  ul.modal-ul li .item .item-texts button{
    height: 40px;
    max-width: 125px;
    border-radius: 2px;
    box-shadow: 0 2px 6px 0 hsla(0,0%,69.8%,.5);
    background-color: #ed1c24;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1.25px;
    border: none;
    text-align: center;
    cursor: pointer;
    flex-grow: 0;
  }
  ul.modal-ul li .item .item-image .price {
    display: flex;
    flex-direction: column;
    margin-top: 15px
  }
  ul.modal-ul li .item .item-image .price strong{
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: .15px;
    text-align: center;

    color: #000;
  }
  ul.modal-ul li .item .item-image .price span{
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 2px;
    text-align: center;
    color: #575757;
    flex-grow: 1;
  }
  ul.modal-ul li .item .item-image img{
    width: 80px;
  }
  
  
`
export const Cont = styled.div`
  font-family: 'Roboto', sans-serif;
  width: calc(100% - 60px);
  padding: 30px 30px 60px;

  
  .cont-close{
    width: 100%;
    padding: 0 0 15px;
    display: flex; 
    justify-content: flex-end;
  }
  .img-content{
    border-radius: 15px;
    width: 100%;
    height: 260px;
    max-width: 900px;
    margin-top: 15px;
    background: url(${imgBg2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
 
  .cont-close svg{
    cursor: pointer;

  }
  h1{
    text-transform:uppercase;
    margin-top: 24px;
    margin-bottom: 12px;
    width: 100%;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #000;
    line-height: 1.1;
  }
  p{
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: .5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color:#000;
    max-width: 1024px;
    margin-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .prices strong{
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: .15px;
    text-align: center;

    color: #000;
  }
  .prices span{
    font-size: 12px;
    font-weight: 500; 
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 2px;
    text-align: center;
    color: #575757;
    flex-grow: 1;
    
  }
  .prices{
    display: flex;
    flex-direction: column;
    margin-top: 15px
  }
  @media (max-width: 600px){
    max-height: 80vh;

    h1{
      font-size: 26px;
    }
  }
`;