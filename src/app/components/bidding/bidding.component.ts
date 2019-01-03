import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { OEPLMember } from '../../modals/OEPLMember';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiddingComponent implements OnInit {

  players: OEPLMember[] = [];
  teams: SelectItem[];
  selectedTeam: any;
  selectedPlayer: OEPLMember = new OEPLMember();
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

    this.teams = [
      { label: 'Royals', value: 'Royals' },
      { label: 'Riders', value: 'Riders' },
      { label: 'Rangers', value: 'Rangers' },
      { label: 'Rovers', value: 'Rovers' }
    ];
  }

  onPlayerSelection(player) {
    this.selectedPlayer = player;
  }

}
