import {IonContent,IonIcon,IonItem,IonLabel,IonList,IonMenu,IonMenuToggle,IonPage,IonRouterOutlet,IonSelect,IonSelectOption,IonSplitPane,IonTitle,IonToolbar,} from '@ionic/react';
  
  import {  checkmark, chevronDownOutline, eyedropOutline,  home, man, medkit, warning } from 'ionicons/icons';
  import './Menu.css';
  import virus from '../../assets/virus-menu.png'
  import { Redirect, Route, Switch } from 'react-router';
  import Dashboard from '../Dashboard/Dashboard';
import List from '../List/List';






 
  
  
  
  const Menu: React.FC = () => {
  
   

  
    
    
    
   
  
    return (
      
      <IonPage>
        <IonSplitPane contentId="main">
        
          <IonMenu contentId="main" side="start" type="overlay">
            
              <IonToolbar color="primary">
                <IonTitle className="logo" ><span style={{ fontFamily: 'Arial, sans-serif' }}>
                  <span style={{ fontFamily: 'Cambria, serif' }}>Menu</span>{' '}
                </span></IonTitle>
              </IonToolbar>
            
            <IonContent>
              <IonList className='virus-list'><img src={virus} alt="Menu Icon" className="virus" /></IonList>
    
            
              <IonList className="menu-items" no-lines>
                
                
                  <IonItem className="active" detail={false} lines='none'  routerLink="/app/Dashboard" routerDirection='none' color="light">
                    <IonIcon slot="start" icon={home} color="primary"/>
                    <IonLabel color="primary">Form</IonLabel>
                  </IonItem>
                  <IonItem className="active" detail={false} lines='none'  routerLink="/app/List" routerDirection='none' color="light">
                    <IonIcon slot="start" icon={home} color="primary"/>
                    <IonLabel color="primary">List</IonLabel>
                  </IonItem>
                
                

              
                   
              

              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Switch>

              <Route exact path='/app/Dashboard' component={Dashboard}></Route>
              <Route exact path='/app/List' component={List}></Route>



            

              <Route exact path='/app'><Redirect to="/app/Dashboard"/></Route>
            </Switch>
    
          </IonRouterOutlet>
    
        </IonSplitPane>
      </IonPage>
    );
  };
  
  export default Menu;
  