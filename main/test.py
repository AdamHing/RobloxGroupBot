import robloxpy as rpy
import roblox as rob
import robloxapi as rpi
import argparse

import requests
# print(rob.BaseGroup.get_members(self=5202521))

groupID = 5202521



rpi.client.Action()


print(rpy.Group.External.GetOwner(groupID))
print(rpy.Group.External.GetMemberCount(groupID))
rob.BaseGroup = rob.BaseGroup.id(groupID)
print(rob.BaseGroup.get_members())

nameList = rpy.Group.External.GetMembersList(groupID,10)

for i in nameList:
  for j in i:
        print(j)



