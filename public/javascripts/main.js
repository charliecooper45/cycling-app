// add year
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
      year     : ['exactLength[4]' ,'integer'],
    }
  });

// delete year
$('#delete-year').click(() => {
  $('#delete-year-modal').modal('show');
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