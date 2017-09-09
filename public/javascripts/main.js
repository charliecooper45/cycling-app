// year
$('#add-year').click(() => {
  $('#add-year-modal').modal('show');
});

$('#add-year-form')
  .form({
    fields: {
      year: ['exactLength[4]', 'integer'],
      distance: ['empty', 'decimal'],
      climbing: ['empty', 'decimal'],
      time: ['empty', 'decimal'],
      count: ['empty', 'integer']
    }
  });

$('#delete-year-form')
  .form({
    fields: {
      year: ['exactLength[4]' ,'integer'],
    }
  });

$('#delete-year').click(() => {
  $('#delete-year-modal').modal('show');
});

// ftp
$('#add-ftp').click(() => {
  $('#add-ftp-modal').modal('show');
});

$('#add-ftp-form')
  .form({
    fields: {
      day: ['empty', 'maxLength[2]', 'integer'],
      month: ['empty'],
      year: ['empty', 'length[4]', 'integer'],
      ftp: ['empty', 'maxLength[3]', 'integer']
    }
  });

$('#delete-ftp-form')
  .form({
    fields: {
      date: ['exactLength[10]'],
    }
  });

$('#delete-ftp').click(() => {
  $('#delete-ftp-modal').modal('show');
});

// weight
$('#add-weight').click(() => {
  $('#add-weight-modal').modal('show');
});

$('#add-weight-form')
  .form({
    fields: {
      day: ['empty', 'maxLength[2]', 'integer'],
      month: ['empty'],
      year: ['empty', 'length[4]', 'integer'],
      weight: ['empty', 'integer']
    }
  });

$('#delete-weight-form')
  .form({
    fields: {
      date: ['exactLength[10]'],
    }
  });

$('#delete-weight').click(() => {
  $('#delete-weight-modal').modal('show');
});

// messages
$('.message .close').click((e) => {
  $(e.target)
    .closest('.message')
    .transition('fade');
});

$('.home-message')
  .delay(5000)
  .fadeOut('slow');