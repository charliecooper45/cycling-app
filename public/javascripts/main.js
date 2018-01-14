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
  createModal('#add-ftp-modal');
});

$('#add-ftp-form')
  .form({
    fields: {
      day: ['empty', 'maxLength[2]', 'integer'],
      month: ['empty'],
      year: ['empty', 'length[4]', 'integer'],
      ftp: ['empty', 'maxLength[3]', 'integer'],
      test: ['empty']
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
  createModal('#add-weight-modal');
});

$('#add-weight-form')
  .form({
    fields: {
      day: ['empty', 'maxLength[2]', 'integer'],
      month: ['empty'],
      year: ['empty', 'length[4]', 'integer'],
      weight: ['empty', 'decimal']
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

// utils
function createModal(modalId) {
  $(modalId).modal('show');
  const date = new Date();
  $(`${modalId} #day`).val(date.getDate());
  $(`${modalId} #month`).val(date.getMonth() + 1);
  $(`${modalId} #year`).val(date.getFullYear());
}