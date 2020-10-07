import React, { useState} from 'react';
import {MdRestaurantMenu, MdKeyboardBackspace, MdClose} from 'react-icons/md'
import { Container, Header,ContainerModal,Cont } from './styles';
import Drawer  from '@material-ui/core/Drawer';



function Categorias() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblePlus, setModalVisiblePlus] = useState(false);
  
  function handleModal(){
    setModalVisible(true);
  }
  function handleClose(){ 
    setModalVisible(false)
  }

  function handleModalPlus(){ 
    setModalVisiblePlus(true)
  }
  function handleCloseModalPlus(){ 
    setModalVisiblePlus(false)
  }

  return (
    <>
      <Header></Header>
      <Container>
        <section className="apresentation">
          <h5>Olá, bem-vindo(a)</h5>
          <h1>Serra Grande "A Casa da Cerveja"</h1>
          <div className="image">

          </div>
        </section>
        <section className="list-cat">
          <ul>
            <li onClick={handleModal}><MdRestaurantMenu color="#c4c4c4"/> <p>Burguers e Sandubas</p></li>
            <li onClick={handleModal}><MdRestaurantMenu color="#c4c4c4"/> <p>Petiscos</p></li>
            <li onClick={handleModal}><MdRestaurantMenu color="#c4c4c4"/><p>Chopes</p></li>
            <li onClick={handleModal}><MdRestaurantMenu color="#c4c4c4"/><p>Cervejas</p></li>
          </ul>
        </section>
        <Drawer  anchor="right" open={modalVisible} onClose={handleClose}>     
            <>
              <Header styles={ modalVisible ? { position:'fixed'} : {position : 'relative'} }>
                <MdKeyboardBackspace size={30} color="#c4c4c4" onClick={handleClose}/>

                <h1>Burguers e Sandubas</h1>

                <div className="nada"></div>
              </Header>
              <ContainerModal>
                <ul className="modal-ul">
                  <li>
                    <div className="item">
                      <div className="item-texts">
                        <h1>Paulista Tradicional</h1>
                        <p>Baguete artesanal da Panetteria Tabacchi, filé de novilho precoce, queijo, tomate, cebola e creme  </p>
                        <button onClick={handleModalPlus}>
                          VER MAIS
                        </button>
                      </div>
                      <div className="item-image">
                        <img src="https://cdn.getinapp.com.br/restaurants/f83104ba-c5c7-4670-8ccf-9abfbf68e5b0/highlights/3807c2bc-4b75-4699-8298-8503cddd451b.png" alt=""/>

                        <div className="price">
                          <span>PREÇO</span>
                          <strong>R$24,00</strong>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="item-texts">
                        <h1>Paulista Tradicional</h1>
                        <p>Baguete artesanal da Panetteria Tabacchi, filé de novilho precoce, queijo, tomate, cebola e creme  </p>
                        <button>
                          VER MAIS
                        </button>
                      </div>
                      <div className="item-image">
                        <img src="https://cdn.getinapp.com.br/restaurants/f83104ba-c5c7-4670-8ccf-9abfbf68e5b0/highlights/3807c2bc-4b75-4699-8298-8503cddd451b.png" alt=""/>

                        <div className="price">
                          <span>PREÇO</span>
                          <strong>R$24,00</strong>
                        </div>
                      </div>
                    </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item-texts">
                      <h1>Paulista Tradicional</h1>
                      <p>Baguete artesanal da Panetteria Tabacchi, filé de novilho precoce, queijo, tomate, cebola e creme  </p>
                      <button>
                        VER MAIS
                      </button>
                    </div>
                    <div className="item-image">
                      <img src="https://cdn.getinapp.com.br/restaurants/f83104ba-c5c7-4670-8ccf-9abfbf68e5b0/highlights/3807c2bc-4b75-4699-8298-8503cddd451b.png" alt=""/>

                      <div className="price">
                        <span>PREÇO</span>
                        <strong>R$24,00</strong>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item-texts">
                      <h1>Paulista Tradicional</h1>
                      <p>Baguete artesanal da Panetteria Tabacchi, filé de novilho precoce, queijo, tomate, cebola e creme  </p>
                      <button>
                        VER MAIS
                      </button>
                    </div>
                    <div className="item-image">
                      <img src="https://cdn.getinapp.com.br/restaurants/f83104ba-c5c7-4670-8ccf-9abfbf68e5b0/highlights/3807c2bc-4b75-4699-8298-8503cddd451b.png" alt=""/>

                      <div className="price">
                        <span>PREÇO</span>
                        <strong>R$24,00</strong>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
        </ContainerModal>
            </>
      </Drawer>
      <Drawer className="drawer"  anchor="bottom" open={modalVisiblePlus} onClose={handleCloseModalPlus}>
        <Cont>
          <div className="cont-close">
           <MdClose size={30} onClick={handleCloseModalPlus}/> 
          </div>
           <div className="img-content">
           </div>

           <h1>Double Smash Burguer</h1>
           <p> Pão artesanal da Panetteria Tabacchi, 02 Smash Burger de Angus  (80 gramas cada), molho especial e queijo. </p>

           <div className="prices">
             <span>preço</span>
             <strong>R$20,00</strong>
           </div>

        </Cont>    
      </Drawer>
      
      </Container>

    </>
  )
}

export default Categorias;