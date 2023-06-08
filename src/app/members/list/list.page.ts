import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [AndroidPermissions]
})
export class ListPage implements OnInit {

  formDataList: any[] = [];

  constructor(
    
    private file:File,
    private fileOpener:FileOpener,
    private downloader: Downloader,
    private platform:Platform
    
    ) {}
  ngOnInit() {
    this.retrieveFormData();
  }




  retrieveFormData() {
    // Retrieve the data from localStorage based on your keys
    const keys = Object.keys(localStorage);

    // Loop through the keys and parse the data
    keys.forEach((key) => {
      const formData = JSON.parse(localStorage.getItem(key)!);
      this.formDataList.push(formData);
    });
  }

  createCSV() {
    // Convert the data to CSV format
    const csvData = this.convertToCSV(this.formDataList);

    // Generate a unique file name
    const fileName = `data_${Date.now()}.csv`;

    // Create a Blob with the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });

    // Check if the platform is browser
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      // Create a temporary download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = fileName;

      // Simulate a click event to trigger the download
      downloadLink.click();
    } else if (this.platform.is('android')) {
      // Code for downloading on Android platform
      const request: DownloadRequest = {
        uri: 'data:text/csv;charset=UTF-8,' + encodeURIComponent(csvData),
        title: 'form_data.csv',
        description: '',
        mimeType: 'text/csv',
        visibleInDownloadsUi: true,
        notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
        destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'form_data.csv'
        }
      };
      this.downloader.download(request)
        .then((location: string) => console.log('File downloaded at: ' + location))
        .catch((error: any) => console.error(error));
    } else if (this.platform.is('ios')) {
      // Code for downloading on iOS platform
      const fileName = 'form_data.csv';
      const filePath = this.file.documentsDirectory + fileName;

      this.file.writeFile(this.file.documentsDirectory, fileName, csvData, { replace: true })
        .then((fileEntry) => {
          this.fileOpener.open(fileEntry.toURL(), 'text/csv')
            .then(() => console.log('File opened successfully'))
            .catch((error: any) => console.error(error));
        })
        .catch((error: any) => console.error(error));
    } else {
      console.error('Unsupported platform');
    }
  }
  convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map((row) => Object.values(row).join(','));
    return header + rows.join('\n');
  }
  // download(){
  //   var downloadurl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0qOFFBpPi5Ss8KiyJGueke&ust=1686259698202000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD-k4mNsv8CFQAAAAAdAAAAABAE'
  //   var request:DownloadRequest={
  //     uri:downloadurl,
  //     title:'file',
  //     mimeType:'image/png',
  //     visibleInDownloadsUi:true,
  //     notificationVisibility:NotificationVisibility.VisibleNotifyCompleted,
  //     destinationInExternalFilesDir:{
  //       dirType:'Downloads',
  //       subPath:'Myfile.png'
  //     }
  //   }
  //   this.downloader.download(request).then((location:string)=>{
  //     alert('file download at'+ location)
  //   },(err)=>{
  //     alert(JSON.stringify(err))
  //   })
  // }



}
  
  
