
exports.seed = function(knex) {

 
      return knex('topic').insert([
        {topic_name: 'nature'},
        {topic_name: 'sky'},
        {topic_name: 'architecture'},
        {topic_name: 'reflection'}
       
      ]);

};
