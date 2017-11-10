class Api::V1::RoastersController < ApplicationController
skip_before_action :verify_authenticity_token

  def find_coffee
    zipcode = (params[:zipcode])
    response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=coffee+roasteries&location=#{zipcode}",
    :headers => { "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",  'Content-Type' => 'application/json'})
    @roaster_array = JSON.parse(response.body)['businesses']
    render json: @roaster_array[0..15]
  end

end
