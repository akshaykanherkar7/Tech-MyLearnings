*** Add New Column in DB ***
    ```js
    module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
        queryInterface.addColumn('users', 'june', {
            type: Sequelize.STRING,
            allowNull: true,
        }),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([queryInterface.removeColumn('users', 'june')]);
    },
    };

*** Updating Column DataType***
    ```js
    module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn("users", "april", {
                type: Sequelize.FLOAT,
                allowNull: false,
            }),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([queryInterface.changeColumn("users", "april")]);
    },
};

*** Change Column Name ***
    ```js
    module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
        queryInterface.renameColumn("user_details", "married", "is_married", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
        }),
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([queryInterface.renameColumn("user_details", "is_married", "married")]);
    },
    };

*** Delete Column ***
    ```js
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.removeColumn('user_details', 'gender');
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
        return Promise.all([
            queryInterface.addColumn('user_details', 'gender', {
            type: Sequelize.DataTypes.STRING,
            defaultValue: null
            }, { transaction: t })
        ])
        })
    }
    };
