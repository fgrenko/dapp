package keeper

import (
	"github.com/fgrenko/dapp/x/dapp/types"
)

var _ types.QueryServer = Keeper{}
