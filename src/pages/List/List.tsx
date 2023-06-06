
import { IonContent,IonHeader,IonMenuButton, IonMenuToggle, IonPage,IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';






const List: React.FC= () => {
    const [formDataList, setFormDataList] = useState<any[]>([]);

    useEffect(() => {
        const keys = Object.keys(localStorage).filter((key) =>
          key.startsWith('formData-')
        );
    
        const formDataArray = keys.map((key) => {
          const formData = JSON.parse(localStorage.getItem(key) || '');
          return { key, formData };
        });
    
        setFormDataList(formDataArray);
      }, []);

      const downloadCSV = () => {
        let csvContent= "data:text/csv;charset=utf-8,"
          + "Key,Name,Father,Number,School,Age,Weight,Height,Visual,Dental,Palm Paler,Ear Wax\n";
    
            formDataList.forEach((formDataItem) => {
            const { key, formData } = formDataItem;
            const row = `${key},${formData.name},${formData.father},${formData.number},${formData.school},${formData.age},${formData.weight},${formData.height},${formData.visual},${formData.dental},${formData.palmPaler},${formData.earWax}\n`;
            csvContent += row;
            });
    
        const encodedURI = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedURI);
        link.setAttribute("download", "form_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

 
  
  
  return(
    <IonPage>
   <IonHeader>
        <IonToolbar color={'white'}>
            <IonMenuToggle slot='start' color='primary'>
              <IonMenuButton color='primary' ></IonMenuButton>
            </IonMenuToggle>
      
          <IonTitle className="List" color="primary">List</IonTitle>
        </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <h1>list</h1>
      <div> <button onClick={downloadCSV}>Download</button></div>
      {formDataList.length > 0 ? (
        formDataList.map((formDataItem) => (
          <ul key={formDataItem.key}>
            <li>Name: {formDataItem.formData.name}</li>
            <li>Father Name: {formDataItem.formData.father}</li>
            <li>Mobile Number: {formDataItem.formData.number}</li>
            <li>School Name: {formDataItem.formData.school}</li>
            <li>Age: {formDataItem.formData.age}</li>
            <li>Weight: {formDataItem.formData.weight}</li>
            <li>Height: {formDataItem.formData.height}</li>
            <li>Visual: {formDataItem.formData.visual}</li>
            <li>Dental: {formDataItem.formData.dental}</li>
            <li>Palm Paler: {formDataItem.formData.palmPaler}</li>
            <li>Ear Wax: {formDataItem.formData.earWax}</li>
          </ul>
        ))
      ) : (
        <p>No form data available.</p>
      )}
    
     

      
      
    </IonContent>
  </IonPage>

  )
}
  
  

export default List;
