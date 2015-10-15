var teamboardApp = angular.module('teamboardApp', []);

teamboardApp.controller('teamviewCtrl', ['$scope', function($scope) {as
    $scope.members = [
        {
            firstName: 'Alexnader',
            lastName: 'Kovalenko',
            photo: 'images/photos/aleksander.kovalenko.jpg',
            position: 'Frontend Developer Lead',
            languages: ['Russian', 'Ukrainian', 'English'],
            skills: ['HTML', 'HTML5', 'CSS3', 'javascript', 'prototypeJS', 'jQuery', 'Magento', 'XML/XSL/XUL', 'SMACSS', 'Grunt'],
            sertifications: [
                {
                    'Magento Front End Developer Certification': 'http://www.magentocommerce.com/certification/directory/dev/1738999/'
                }
            ],
            cellphone: '',
            privatePhone: '+380955292968',
            workEmail: 'alexander.kovalenko@symmetrics.de',
            privateEmail: 'olexander.kovalenko@gmail.com',
            skype: 'skovalenko3842',
            twitter: 'Tolerant_vp',

        },
        {
            firstName: 'Eduard',
            lastName: 'Melnitskiy',
            photo: 'images/photos/eduard.melnitskiy.jpg',
            position: 'Magento Team Leads Lead'
        },
        {
            firstName: 'Boris',
            lastName: 'Lokshin',
            photo: 'images/photos/boris.lokshin.jpg',
            position: 'Business Manager - Delivery Center Lead - Chief strategist'
        }
    ];

}]);