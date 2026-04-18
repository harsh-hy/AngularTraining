import { Component } from '@angular/core';

@Component({
  selector: 'app-pipee-example',
  standalone: false,
  templateUrl: './pipee-example.html',
  styleUrl: './pipee-example.css',
})
export class PipeeExample {
  players = [
    { name: 'Kyle Walker', position: 'Defender', team: 'Manchester City' },
    { name: 'Erling Haaland', position: 'Striker', team: 'Manchester City' },
    { name: 'Kevin De Bruyne', position: 'Midfielder', team: 'Manchester City' },
    { name: 'Riyad Mahrez', position: 'Winger', team: 'Manchester City' },
    { name: 'Phil Foden', position: 'Midfielder', team: 'Manchester City' },

    { name: 'Reece James', position: 'Defender', team: 'Chelsea' },
    { name: 'Enzo Fernández', position: 'Midfielder', team: 'Chelsea' },
    { name: 'Raheem Sterling', position: 'Winger', team: 'Chelsea' },
    { name: 'Christopher Nkunku', position: 'Forward', team: 'Chelsea' },
    { name: 'Ben Chilwell', position: 'Defender', team: 'Chelsea' },

    { name: 'Patrick Bamford', position: 'Striker', team: 'Leeds United' },
    { name: 'Crysencio Summerville', position: 'Winger', team: 'Leeds United' },
    { name: 'Pascal Struijk', position: 'Defender', team: 'Leeds United' },
    { name: 'Ethan Ampadu', position: 'Defender', team: 'Leeds United' },
    { name: 'Georginio Rutter', position: 'Forward', team: 'Leeds United' },
  ];
  
}
