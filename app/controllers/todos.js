import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
        // sort by date
        sortBy: 'date',
        sortDefinition: computed('sortBy', function() {
                return [this.get('sortBy')];
        }),
        sortedTodos: sort('model', 'sortDefinition'),

        // search filter
        filter: '',
        filteredTodos: computed('filter', function() {
                let filter = this.get('filer');
                let rx = new RegExp(filter, 'gi');
                let todos = this.model;

                return todos.filter(function(todo) {
                        return todo.get('title').match(rx) || todo.get('body').match(rx);
                });
        })
});
