import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, DropArg } from '@fullcalendar/interaction';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FullCalendarModule,MatDialogModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  events: EventInput[] = [
    { title: 'Meeting with John', date: '2023-02-01',color: 'green' },
    { title: 'Lunch with Jane', date: '2023-02-01' },
    { title: 'Gym at 7:00 PM', date: '2023-02-02' },
    { title: 'Doctor Appointment', date: '2023-02-03' },
    // ... and so on
  ];
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
    plugins: [dayGridPlugin,timeGridPlugin, interactionPlugin],
    weekends: true,
    selectable: true,
    editable : true,
    events: this.events,
    dateClick: this.handleDateClick.bind(this), // bind the handleDateClick method to the component instance
    eventClick: this.clickOnEvent.bind(this),
    eventDrop : this.hadleDropEvent.bind(this),
    // drop : this.hadleDropEvent.bind(this)
  };
  ngOnInit(): void {

  }

  hadleDropEvent(arg: EventDropArg) {
    const selectedEvent = this.events.find(x => x.title === arg.event.title);
    this.events = this.events.filter(x => x.title !== arg.event.title)
    selectedEvent!.date = arg.event.startStr;
    this.events.push(selectedEvent!);
    this.calendarOptions.events = [...this.events]
    console.log(this.events)
  }

  handleDateClick(arg: DateClickArg) {
    // alert('Date clicked: ' + arg.date); // display the clicked date in an alert
    const dialogRef = this.dialog.open(EventComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res !== 'false' && res !== undefined && res.length > 0) {
          this.events.push({ title: res, date: arg.dateStr })
          this.calendarOptions.events = [...this.events]
        }
      }
    } )
  }

  clickOnEvent(arg: EventClickArg) {
    const selectedEvent = this.events.find(x => x.title == arg.event.title)
    const dialogRef = this.dialog.open(EventComponent, {
      width: '250px',
      data : selectedEvent
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res !== 'false' && res !== undefined) {
          const editEvent = this.events.filter(x => x.title !== selectedEvent?.title)
          selectedEvent!.title = res
          editEvent.push(selectedEvent!)
          this.events = [...editEvent]
          this.calendarOptions.events = [...editEvent]
        } else if(res !== undefined && res == 'false') {
          const editEvent = this.events.filter(x => x.title !== selectedEvent?.title)
          this.events = [...editEvent]
          this.calendarOptions.events = [...editEvent]
        }
      }
    } )
  }
}
