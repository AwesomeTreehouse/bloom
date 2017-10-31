require 'rails_helper'

RSpec.describe User, type: :model do
  it "creates or updates itself from an oauth hash" do
    auth = {
      provider: "google",
      uid: "1234567890987654321",
        info: {
          email: "user_email@email.com",
          first_name: "Al",
          last_name: "Dante"
        },
        credentials: {
          token: "ya29.Glv1BPagNSC-Xs92uQQ0wHqUN7BWKZ-Z7isJ_65NlWCdqL0QJWQ-gYyfEDPzDC-0ecvnhB3vkfBI7h9W_UUEXX5Wk6ZmyoLrEq2ZN2Jhmxmq4a9bM4GWhdB_znhf",
          refresh_token: "12345abcdefg",
          expires_at: DateTime.now
        }
      }
    User.update_or_create(auth)
    new_user = User.first

    expect(new_user.provider).to eq("google")
    expect(new_user.uid).to eq("1234567890987654321")
    expect(new_user.email).to eq("user_email@email.com")
    expect(new_user.first_name).to eq("Al")
    expect(new_user.last_name).to eq("Dante")
    expect(new_user.token).to eq("ya29.Glv1BPagNSC-Xs92uQQ0wHqUN7BWKZ-Z7isJ_65NlWCdqL0QJWQ-gYyfEDPzDC-0ecvnhB3vkfBI7h9W_UUEXX5Wk6ZmyoLrEq2ZN2Jhmxmq4a9bM4GWhdB_znhf")
    expect(new_user.refresh_token).to eq("12345abcdefg")
    expect(new_user.oauth_expires_at).to eq(auth[:credentials][:expires_at])
  end
end
