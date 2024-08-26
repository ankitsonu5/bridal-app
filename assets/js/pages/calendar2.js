"use strict";
$('#calendar').fullCalendar({
    defaultView: 'agendaWeek',

    header: {
        left: 'title', // you can add today btn
        center: '',
        right: 'month, agendaWeek, listWeek, prev, next', // you can add agendaDay btn
    },
    contentHeight: 'auto',
    defaultDate: '2019-12-09',
    editable: true,
	allDaySlot: true,
    droppable: false, // this allows things to be dropped onto the calendar
    eventLimit: true, // allow "more" link when too many events
	minTime: "08:00",
	maxTime: "24:00",
	
	dayClick: function(date, jsEvent, view) {
		var newdate = date.format()
		var newval = newdate.split('T');
		
		var timeString =newval[1];
		var hourEnd = timeString.indexOf(":");
		var H = +timeString.substr(0, hourEnd);
		var h = H % 12 || 12;
		var ampm = H < 12 ? " AM" : " PM";
		timeString = h + timeString.substr(hourEnd, 3) + ampm;
		
		$('#starttime').val(timeString)
		$('#appointmentdate').val(newval[0])
	    $('#reshedual').prop('disabled', true);
        $("#addevent").modal("show");
},
	
        
    events: [
        {
            title: 'Beautiful Bride Two',
            start: '2019-12-09T15:00:00',
			end: '2019-12-09T16:00:00',
            className: 'bg-blue',            
        },
        {
            title: 'Beautiful Bride',
            start: '2019-12-09T11:00:00',
            end: '2019-12-09T14:45:00',
            className: 'bg-pink'
        },
        {
            id: 999,
            title: 'Bride Name 1',
            start: '2019-12-09T14:00:00',
            end: '2019-12-09T16:50:00',
            className: 'bg-green'
        },
        {
            id: 999,
            title: 'Bride Name 2',
            start: '2019-12-23T16:00:00',
			end: '2019-12-23T17:00:00',
            className: 'bg-blue'
        },
        {
            title: 'Bride Name 3',
            start: '2019-12-23T11:00:00',
			end: '2019-12-23T17:00:00',
            className: 'bg-green'
        },
        {
            title: 'Bride Name 4',
            start: '2019-12-13T08:30:00',
            end: '2019-12-13T17:30:00',
            className: 'bg-pink'
        },
		
        {
            title: 'Bride Name 5',
            start: '2019-12-12T12:00:00',
            className: 'bg-blue'
        },
        {
            title: 'Bride Name 6',
            start: '2019-12-18T14:30:00',
            className: 'bg-green'
        },
        {
            title: 'Bride Name 7',
            start: '2019-12-013T17:30:00',
            className: 'bg-pink'
        },
        {
            title: 'Bride Name 8',
            start: '2019-12-11T20:00:00',
            className: 'bg-blue'
        },
        {
            title: 'Bride Name 9',
            start: '2019-12-10T11:00:00',
            end: '2019-12-10T14:30:00',
            className: 'bg-pink'
        },
		
		{
            title: 'Bride Name 10',
            start: '2019-12-10T11:30:00',
            end: '2019-12-10T3:50:00',
            className: 'bg-blue',
			content:'Hello World! <br> <p>Foo Bar</p>',
 

        },
		
		{
            title: 'Bride Name 11',
            start: '2019-12-10T11:50:00',
            end: '2019-09-10T12:30:00',
            className: 'bg-green'
        },
		
		{
            title: 'Bride Name 14',
            start: '2019-12-10T13:50:00',
            end: '2019-09-10T16:30:00',
            className: 'bg-green'
        },
		
		{
            title: 'Bride Name 15',
            start: '2019-12-10T14:50:00',
            end: '2019-09-10T15:40:00',
            className: 'bg-blue'
        },
		
		{
            title: 'Bride Name 12',
            start: '2019-12-10T02:00:00',
            end: '2019-12-10T05:30:00',
            className: 'bg-green'
        },
		{
            title: 'Bride Name 13',
             start: '2019-12-10T10:30:00',
            end: '2019-12-10T01:30:00',
            className: 'bg-blue'
        }
    ],
	
	eventClick: function(event) {
		
		
	
		$('#eventid').val(event._id);
		$("#addevent").modal("show");
		$("#addevent .modal-header #defaultModalLabel").text(event.title);
		$('#reshedual').prop('disabled', false);
		
		var date = event.start;
		var newdate = date.format()
		var newval = newdate.split('T');
		
		var timeString =newval[1];
		var hourEnd = timeString.indexOf(":");
		var H = +timeString.substr(0, hourEnd);
		var h = H % 12 || 12;
		var ampm = H < 12 ? " AM" : " PM";
		timeString = h + timeString.substr(hourEnd, 3) + ampm;
		$('#appointmentdate').val(newval[0]);
		$("#starttime").val(timeString);
		
}
 
	, eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
	 debugger;

    if (!confirm("Are you sure about this change?")) {
     revertFunc();
    }
  }
	
 
 
 
});
$(document).ready(function () {
$('#submitButton').on('click', function(e){
            // We don't want this to act as a link so cancel the link action
            e.preventDefault();

            doSubmit();
          });

      function doSubmit(){
		 var eventid =  $('#eventid').val();
         $('#calendar').fullCalendar( 'removeEvents', [eventid] );
		  
        $("#addevent").modal('hide');
        var endtimeminut = $('#endtime').val();
      
        
        var time = $('#starttime').val();
		var hours = Number(time.match(/^(\d+)/)[1]);
		var minutes = Number(time.match(/:(\d+)/)[1]);
		var AMPM = time.match(/\s(.*)$/)[1];
		if(AMPM == "PM" && hours<12) hours = hours+12;
		if(AMPM == "AM" && hours==12) hours = hours-12;
		var sHours = hours.toString();
		var sMinutes = minutes.toString();
		if(hours<10) sHours = "0" + sHours;
		if(minutes<10) sMinutes = "0" + sMinutes;
		var startval = sHours + ":" + sMinutes+ ":00";
		var starttime = new Date($('#appointmentdate').val()+'T'+startval);
		
		
		var fulldatetime = $('#appointmentdate').val()+'T'+startval;
		var dt = new Date(fulldatetime);
	    var endtime = new Date(dt.getTime() + endtimeminut*60000);
	
    
        $("#calendar").fullCalendar('renderEvent',
            {
                title: 'this is test title',
                start: starttime,
                end:endtime,
                className: 'bg-green',

            },
            true);
       }


$('#yesreshedule').on('click', function(e){
    var similarEvents = $("#calendar").fullCalendar('clientEvents', function(e) { return e._id === $('#eventid').val() });
        
           var eventid =  $('#eventid').val();
           $('#calendar').fullCalendar( 'removeEvents', [eventid] );
           
         var endtimeminut = $('#endtime').val();
        var time = $('#starttime').val();
		var hours = Number(time.match(/^(\d+)/)[1]);
		var minutes = Number(time.match(/:(\d+)/)[1]);
		var AMPM = time.match(/\s(.*)$/)[1];
		if(AMPM == "PM" && hours<12) hours = hours+12;
		if(AMPM == "AM" && hours==12) hours = hours-12;
		var sHours = hours.toString();
		var sMinutes = minutes.toString();
		if(hours<10) sHours = "0" + sHours;
		if(minutes<10) sMinutes = "0" + sMinutes;
		var startval = sHours + ":" + sMinutes+ ":00";
		var starttime = new Date($('#appointmentdate').val()+'T'+startval);
	
		var fulldatetime = $('#appointmentdate').val()+'T'+startval;
		var dt = new Date(fulldatetime);
	    var endtime = new Date(dt.getTime() + endtimeminut*60000);
		
		 
    
        $("#calendar").fullCalendar('renderEvent',
            {
                title:similarEvents[0].title,
                start: starttime,
                end:endtime,
                className: 'bg-green',

            },
            true);
           
            
            $("#calendar").fullCalendar('renderEvent',
            {
                title: similarEvents[0].title,
                start: similarEvents[0].start,
                end:similarEvents[0].end,
                className: 'bg-stripe',

            },
            true);
            
        $('#exampleModalCenter').modal('hide');   
        $("#addevent").modal('hide');
  });

   
        
  });
