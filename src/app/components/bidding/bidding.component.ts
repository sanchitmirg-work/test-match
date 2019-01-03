import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { OEPLMember } from '../../modals/OEPLMember';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiddingComponent implements OnInit {

  players: OEPLMember[] = [];
  constructor(
    private service: PlayersService
  ) { }

  ngOnInit() {
    this.service.getPlayers('members/findAll')
      .subscribe((response) => {
        if (response) {
          this.players = response;
        }
      });
  }

}
