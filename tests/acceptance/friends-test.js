import { test } from 'qunit';
import moduleForAcceptance from 'address-book/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends');

test('visiting /friends', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
  });
});



