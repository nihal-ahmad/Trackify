from django.urls import path, re_path
from rest_framework.authtoken.views import obtain_auth_token
from .views import (
    SignUpView,
    ArenaMembersListView,
    UsersArenaListView,
    ArenaBytesListView,
    ArenaCreateView,
    CustomAuthToken
)

urlpatterns = [
    path('signup', SignUpView, name="signup"),
    path('login', CustomAuthToken.as_view(), name="login"),
    path('', UsersArenaListView.as_view(), name="users_arena"),
    re_path('^members/(?P<arena_name>.+)/$',
            ArenaMembersListView.as_view(), name="arena_members"),
    re_path('^bytes/(?P<arena_name>.+)/$',
            ArenaBytesListView.as_view(), name="arena_bytes"),
    path('create/arena', ArenaCreateView, name="create_arena"),
]
