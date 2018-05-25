import Controller from '@ember/controller';

export default Controller.extend({
        actions: {
                addTodo: function() {
                        let date = this.get('date');
                        let title = this.get('title');
                        let body = this.get('body');

                        // create new todo
                        var newTodo = this.store.createRecord('todo', {
                                title,
                                date: new Date(date),
                                body
                        });

                        // save to firebase
                        newTodo.save();

                        // clear the form
                        this.setProperties({
                                title: '',
                                body: '',
                                date: ''
                        });
                }
        }
});
