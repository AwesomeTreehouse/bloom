class Api::V1::RoastersController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
     zipcode = (params[:zipcode])
     response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=coffee+roasteries&location=#{zipcode}",
     :headers => { "Authorization" => "Bearer #{request.env["YELP_API_KEY"]}",  'Content-Type' => 'application/json'})
     binding.pry
     @roaster_array = JSON.parse(response.body)
     @roasters_list = @roaster_array['businesses']
     render json: @roaster_list[0..10]
   end

   def zipcode_params
     params.require(:zipcode).permit(:zipcode)
   end

end
