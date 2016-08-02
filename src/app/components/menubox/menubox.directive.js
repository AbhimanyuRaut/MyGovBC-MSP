'use strict';

import menuBoxTpl from './menubox.html';

function menuBoxComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: menuBoxTpl,
    controller: MenuBoxController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function MenuBoxController ($scope, notificationService) {
    'ngInject'
    notificationService.getUnreadCount(function(err, num){
      $scope.unreadMsgCount = num
    })
  }

}

export default menuBoxComponent;