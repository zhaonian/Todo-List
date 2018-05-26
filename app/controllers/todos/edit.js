import Controller from '@ember/controller';

export default Controller.extend({
        actions: {
                editTodo: id => {
                        let self = this;
                        let title = this.get('model.title');
                        let date = this.get('model.date');
                        let body = this.get('model.body');

                        this.store.findRecord('todo', id).then(todo => {
                                todo.set('title', title);
                                todo.set('date', new Date(date));
                                todo.set('body', body);

                                todo.save();
                                self.transitionTo('todos');
                        });
                },

                deleteTodo: id => {
                        let self = this;

                        this.store.findRecord('todo', id).then(todo => {
                                todo.deleteRecord();

                                todo.save();
                                self.transitionTo('todos');
                        });
                }
        }
});
