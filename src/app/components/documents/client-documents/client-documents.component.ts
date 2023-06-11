import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client-documents',
  templateUrl: './client-documents.component.html',
  styleUrls: ['./client-documents.component.scss']
})
export class ClientDocumentsComponent {

  closeResult = '';
  documentCurrent: any = {};

  constructor(private modalService: NgbModal) { }

  open(content: any, document: any) {
    this.documentCurrent = document;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  documents = [
    { id: 1, name: 'Documento 1', status: 'Aprobado' },
    { id: 2, name: 'Documento 2', status: 'Pendiente' },
    { id: 3, name: 'Documento 3', status: 'Rechazado' },
    // ...
  ];

  verDocumento(id: number) {
    // Lógica para ver el documento con la ID especificada
    console.log(`Ver documento con ID ${id}`);
  }

  rechazarDocumento(id: number) {
    // Lógica para rechazar el documento con la ID especificada
    console.log(`Rechazar documento con ID ${id}`);
  }


}
