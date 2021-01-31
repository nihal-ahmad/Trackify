from django.urls import path, re_path
from rest_framework.authtoken.views import obtain_auth_token
from .views import (
    SignUpView,
    CustomAuthToken,
    CreateNewOpening,
    UpdateOpening,
    ToApplyList,
    AppliedList,
    RejectedList,
    OngoingList,
    OfferList
)

urlpatterns = [
    path('signup', SignUpView, name="signup"),
    path('login', CustomAuthToken.as_view(), name="login"),
    path('api/create', CreateNewOpening, name="create"),
    path('api/update', UpdateOpening, name="update"),
    path('api/toapply', ToApplyList.as_view(), name="to_apply"),
    path('api/applied', AppliedList.as_view(), name="to_apply"),
    path('api/ongoing', OngoingList.as_view(), name="to_apply"),
    path('api/rejected', RejectedList.as_view(), name="to_apply"),
    path('api/offer', OfferList.as_view(), name="to_apply"),
]
