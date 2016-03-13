$(function() {

  'use strict';

  $(".prettydate").prettydate();

  $(".prettydate-add-options").prettydate({
    date: (new Date()).getTime() + (24 * 60 * 60 * 1000) // Tomorrow
  });

  $(".prettydate-auto-update").prettydate({
    autoUpdate: true,
    date: new Date(),
    duration: 1000
  });
});
