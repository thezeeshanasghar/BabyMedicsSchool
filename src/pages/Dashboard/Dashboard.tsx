
import {   IonButton, IonContent,IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonMenuToggle, IonPage,IonTitle, IonToolbar } from '@ionic/react';
import './Dashboard.css'
import  {  useState } from 'react';





const Dashboard: React.FC= () => {
  const [name,setName]=useState('')
  const [father,setFatherName]=useState('')
  const [number,setNumber]=useState('')
  const [school,setSchool]=useState('')
  const [age,setAge]=useState('')
  const [height,setHeight]=useState('')
  const [weight,setWeight]=useState('')
  const [earWax,setEarWax]=useState('')
  const [visual,setVisual]=useState('')
  const [dental,setDental]=useState('')
  const [palmPaler,setPalmPaler]=useState('')


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      father,
      number,
      school,
      age,
      height,
      weight,
      earWax,
      visual,
      dental,
      palmPaler,
    };

    let counter = localStorage.getItem('formCounter');
    if (!counter) {
      counter = '0';
    }
    const key = `formData-${counter}`;
  
    localStorage.setItem(key, JSON.stringify(formData));
    localStorage.setItem('formCounter', String(Number(counter) + 1));
    console.log(formData);
    setName('');
    setFatherName('');
    setNumber('');
    setSchool('');
    setAge('');
    setHeight('');
    setWeight('');
    setEarWax('');
    setVisual('');
    setDental('');
    setPalmPaler('');
  };
  
  
  return(
    <IonPage>
   <IonHeader>
        <IonToolbar color={'white'}>
            <IonMenuToggle slot='start' color='primary'>
              <IonMenuButton color='primary' ></IonMenuButton>
            </IonMenuToggle>
      
          <IonTitle className="dashboard" color="primary">Form</IonTitle>
        </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <form onSubmit={handleFormSubmit}>
      <IonItem>
        <IonLabel color="primary" position="floating">Child Name</IonLabel>
        <IonInput type="text" required value={name} onIonChange={(e) => setName(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Father Name</IonLabel>
        <IonInput type="text" required value={father} onIonChange={(e) => setFatherName(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Father mobile Number</IonLabel>
        <IonInput type="text" required value={number} onIonChange={(e) => setNumber(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">School Name</IonLabel>
        <IonInput type="text" required value={school} onIonChange={(e) => setSchool(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Age</IonLabel>
        <IonInput type="text" required value={age} onIonChange={(e) => setAge(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Weight</IonLabel>
        <IonInput type="text" required value={weight} onIonChange={(e) => setWeight(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Height</IonLabel>
        <IonInput type="text" required value={height} onIonChange={(e) => setHeight(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Visual</IonLabel>
        <IonInput type="text" required value={visual} onIonChange={(e) => setVisual(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Dental</IonLabel>
        <IonInput type="text" required value={dental} onIonChange={(e) => setDental(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Palm Paler</IonLabel>
        <IonInput type="text" required value={palmPaler} onIonChange={(e) => setPalmPaler(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel color="primary" position="floating">Ear Wax</IonLabel>
        <IonInput type="text" required value={earWax} onIonChange={(e) => setEarWax(e.detail.value!)}></IonInput>
      </IonItem>

      <IonButton type='submit'>Add</IonButton>
      
      </form>
  
    
     

      
      
    </IonContent>
  </IonPage>

  )
}
  
  

export default Dashboard;
