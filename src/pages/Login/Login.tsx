import './Login.css'
import React, { useState } from 'react';
import { IonContent, IonPage, IonButton,IonCard, IonInput, IonCardContent, IonToast, useIonRouter,  } from '@ionic/react';


const Login: React.FC= () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [showToast, setShowToast] = useState(false);

  const navigation=useIonRouter()

 
  

  


const doLogin=(e: React.FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    

        if (email === 'admin' && password === 'admin') {
          
          setTimeout(() => {
            
      
            navigation.push('/app', 'root', 'pop');

          
          
        }, 2000);
        
        } else {
          // Show a toast message indicating invalid credentials
          setShowToast(true);
        }
   
}

  return (
  
    <IonPage className='login'>
        <IonContent className='content'>
            <IonCard className='card' style={{'backgroundCcolor':' #d3cccc94'}}>
                <IonCardContent className='card-content'>
                <form className="form" onSubmit={doLogin}>
                      
                      <IonInput

                          className="User"
                          type="text"
                          placeholder="Email"
                          value={email}
                          
                          onIonChange={(e) => setEmail(e.detail.value!)}
                          required
                      ></IonInput>
                      
                      <IonInput 
                          className="User"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onIonChange={(e) => setPassword(e.detail.value!)}
                          required
                      ></IonInput>
                      <IonButton className='button' type="submit" >Login</IonButton>
      
                  </form>

                </IonCardContent>

            </IonCard>
            <IonToast
              isOpen={showToast}
              message="Invalid credentials"
              duration={2000}
              onDidDismiss={() => setShowToast(false)}
              className='login-toast'
              color={'danger'}
            />
           

        </IonContent>
      
       
        
    </IonPage>
  );
};

export default Login;
