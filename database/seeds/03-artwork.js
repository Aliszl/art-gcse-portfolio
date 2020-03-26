
exports.seed = function(knex) {

      return knex('artwork').insert([
        {title: "Siamese Fighter Fish", description: 'pastels.  Abyss', theme_id: 1, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/stylisedFish.jpg'},
        {title: "clouds-cirrus", description: 'cirrus clouds- digital art', theme_id: 1, artist_id:1,  source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/cirrus.jpg'},
        {title: "clouds-cumulonimbus", description: 'cumulonimbus digital art', theme_id: 2, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/cirrus.jpg'},
        {title: "darkwood", description: 'digital fantasy landscape', theme_id: 1, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/darkwood.jpg'},
        {title: "mushroom forest", description: 'digital art', theme_id: 1, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/mushroomforest.jpg'},
        {title: "wood clearing", description: 'digital art', theme_id: 1, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/woodclearing.jpg'},
        {title: "tree shadow", description: 'photograph', theme_id: 1, artist_id:1, source_image:'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/treeshadow.jpg'} 
      ]);
    }