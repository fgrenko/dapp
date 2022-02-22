package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/fgrenko/dapp/x/dapp/types"
)

func (k msgServer) CreateTask(goCtx context.Context, msg *types.MsgCreateTask) (*types.MsgCreateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	var task = types.Task{
		Creator: msg.Creator,
		TaskType: msg.TaskType,
		Input: msg.Input,
		Config: msg.Config,
	}

	id := k.AppendTask(ctx,task)

	return &types.MsgCreateTaskResponse{Id: id}, nil
}
