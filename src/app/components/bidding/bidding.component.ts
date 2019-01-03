import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { OEPLMember } from '../../modals/OEPLMember';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiddingComponent implements OnInit {

  players: OEPLMember[] = [];
  teams: SelectItem[] = [];
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

    this.service.getTeams('members/allTeam')
      .subscribe((response) => {
        if (response) {
          this.setTeams(response);
        }
      })

    /* this.teams = [
      { label: 'Royals', value: 'Royals' },
      { label: 'Riders', value: 'Riders' },
      { label: 'Rangers', value: 'Rangers' },
      { label: 'Rovers', value: 'Rovers' }
    ]; */
  }

  setTeams(data) {
    for (let i = 0; i < data.length; i++) {
      // tslint:disable-next-line:no-var-keyword
      this.teams.push({ label: data[i].teamName, value: data[i].id });
    }
  }

  onPlayerSelection(player) {
    this.selectedPlayer = player;
  }

  assignPlayerToTeam() {
    console.log("inside button click")
    this.service.addPlayer(this.selectedPlayer, 'members/addMember', this.selectedTeam)
      .subscribe((response) => {
        if (response) {
          console.log("response on adding member", response)
        }
      })
  }

}

export class SITem {
  label: any;
  value: any;
}
