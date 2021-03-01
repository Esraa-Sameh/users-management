import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [];
  closeResult = '';
  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.users = res['usersData']['data'];
    });
  }
  clickDeleteUser(id: number) {
    this.usersService.deleteSingleUser().subscribe(() => {
      var index = this.users.findIndex((user) => user.id === id);
      this.users.splice(index, 1);
    });
  }

  openModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        //Promise resolved when we call modal.close which is called when clicking the save btn
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log(this.closeResult);
        },
        //Promise rejected when modal.dismiss is called, which is called when the user presses esc or clicks outside the modal
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log(this.closeResult);
        }
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
  onAddUserSubmit(form: NgForm) {
    let user = form.value;
    user.id = Math.floor(Math.random() * 100);
    this.users.push(user);
  }
}
